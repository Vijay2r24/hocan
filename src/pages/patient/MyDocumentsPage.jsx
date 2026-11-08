import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Eye,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
import { deleteDocument } from '../../store/documentSlice';
import MedicalDocumentUpload from '../../components/patient/MedicalDocumentUpload';
import { useToast } from '../../components/common/ToastNotification';
import { DocumentListSkeleton } from '../../components/skeletons';

export default function MyDocumentsPage() {
  const { documents } = useSelector((state) => state.documents);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewDoc, setPreviewDoc] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  // Automatically load page-related document skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Radiology', 'Laboratory', 'Imaging', 'Medical Clearance', 'Passport'];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 250);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 250);
  };

  const docList = Array.isArray(documents) ? documents : [];
  const filtered = docList.filter((doc) => {
    const matchesCat = activeCategory === 'All' || doc.category === activeCategory;
    const matchesSearch = (doc.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDelete = (id, name) => {
    dispatch(deleteDocument(id));
    showToast(`Deleted ${name}`, 'info');
  };

  if (isInitialLoading) {
    return <DocumentListSkeleton rows={4} fullPage={true} />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          My Medical Records & Diagnostic Documents
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Upload and store all MRI, CT, pathology reports and passport scans in our encrypted, HIPAA-compliant patient repository.
        </p>
      </div>

      {/* Upload Component Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
        <h3 className="font-display font-bold text-base text-[#073B57] mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#FF791B]" />
          Upload New Medical Diagnostic Record
        </h3>
        <MedicalDocumentUpload />
      </div>

      {/* Records Management Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#073B57] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[#FF791B]"
            />
          </div>
        </div>

        {/* Documents Table / Grid with Skeleton State */}
        {isFiltering ? (
          <DocumentListSkeleton rows={4} />
        ) : (
          <div className="divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-400">
              No documents found matching "{searchTerm}" in category "{activeCategory}".
            </div>
          ) : (
            filtered.map((doc) => (
              <div
                key={doc.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/70 p-2 rounded-xl transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF791B] flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#073B57] truncate">
                      {doc.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-semibold text-slate-700">{doc.category}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {doc.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>

                  <button
                    onClick={() => setPreviewDoc(doc)}
                    className="p-2 rounded-lg text-slate-600 hover:text-[#073B57] hover:bg-slate-100"
                    title="Preview Document"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => showToast(`Downloading ${doc.name}...`, 'info')}
                    className="p-2 rounded-lg text-slate-600 hover:text-[#073B57] hover:bg-slate-100"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(doc.id, doc.name)}
                    className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        )}
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-sm text-[#073B57] truncate">{previewDoc.name}</h4>
              <button
                onClick={() => setPreviewDoc(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-8 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
              <FileText className="w-16 h-16 text-[#0B5678]" />
              <div>
                <p className="font-bold text-xs text-[#073B57]">{previewDoc.name}</p>
                <p className="text-[11px] text-slate-500">{previewDoc.category} • {previewDoc.size}</p>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-bold">
                ✓ Medical Encryption Signature Validated
              </span>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  showToast(`Downloading ${previewDoc.name}...`, 'info');
                  setPreviewDoc(null);
                }}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#073B57] text-white text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
