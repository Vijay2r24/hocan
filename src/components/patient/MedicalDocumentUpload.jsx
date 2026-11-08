import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  UploadCloud,
  FileText,
  Trash2,
  Eye,
  CheckCircle,
  AlertCircle,
  FileImage,
  FileCheck,
  X
} from 'lucide-react';
import { uploadDocument } from '../../store/documentSlice';
import { useToast } from '../common/ToastNotification';

export default function MedicalDocumentUpload({ onUploaded }) {
  const [dragActive, setDragActive] = useState(false);
  const [docCategory, setDocCategory] = useState('Radiology');
  const [previewFile, setPreviewFile] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file) => {
    if (!file) return;

    // Check size limit: 15MB
    if (file.size > 15 * 1024 * 1024) {
      showToast('File size exceeds 15MB limit. Please upload a smaller file.', 'error');
      return;
    }

    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      showToast('Invalid file format. Please upload PDF, JPG or PNG documents only.', 'error');
      return;
    }

    const sizeFormatted =
      file.size > 1024 * 1024
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
        : `${Math.round(file.size / 1024)} KB`;

    const newDoc = {
      name: file.name,
      type: file.type.includes('pdf') ? 'PDF Report' : 'Diagnostic Image',
      category: docCategory,
      size: sizeFormatted
    };

    dispatch(uploadDocument(newDoc));
    showToast(`Uploaded ${file.name} successfully!`, 'success');
    if (onUploaded) onUploaded(newDoc);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Category selector */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-700">Document Type:</span>
        {['Radiology', 'Laboratory', 'Imaging', 'Medical Clearance', 'Passport'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setDocCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              docCategory === cat
                ? 'bg-[#073B57] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Drag & Drop Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
          dragActive
            ? 'border-[#FF791B] bg-orange-50/50 scale-[1.01]'
            : 'border-slate-300 hover:border-[#073B57] bg-slate-50/50 hover:bg-white'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleChange}
          className="hidden"
        />

        <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF791B] mb-3 shadow-xs">
          <UploadCloud className="w-7 h-7" />
        </div>

        <h4 className="font-bold text-sm text-[#073B57] mb-1">
          Drag & drop your medical report here, or <span className="text-[#FF791B]">browse</span>
        </h4>
        <p className="text-xs text-slate-500 mb-3">
          Supports MRI/CT scans, blood tests, biopsy, discharge summaries (PDF, JPG, PNG up to 15MB)
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Encrypted HIPAA/GDPR Compliant Medical Cloud</span>
        </div>
      </div>
    </div>
  );
}
