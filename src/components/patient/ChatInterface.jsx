import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Send,
  Paperclip,
  Phone,
  MessageCircle,
  CheckCheck,
  Clock,
  Sparkles,
  FileText
} from 'lucide-react';
import { sendMessage, receiveCoordinatorReply, setTyping } from '../../store/messageSlice';
import { useToast } from '../common/ToastNotification';

export default function ChatInterface() {
  const dispatch = useDispatch();
  const { messages, isTyping } = useSelector((state) => state.messages);
  const { user } = useSelector((state) => state.auth);
  const { showToast } = useToast();

  const [inputMessage, setInputMessage] = useState('');
  const [attachedFileName, setAttachedFileName] = useState('');
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickChips = [
    'What documents are needed for my Medical Visa?',
    'Can I request an airport wheelchair for Delhi arrival?',
    'What is the daily schedule of doctor rounds?',
    'How do I make payment at Fortis hospital counter?'
  ];

  const handleSend = (textToSend = inputMessage) => {
    if (!textToSend.trim() && !attachedFileName) return;

    dispatch(
      sendMessage({
        senderName: user?.fullName || 'You',
        text: textToSend,
        attachment: attachedFileName || null
      })
    );

    setInputMessage('');
    setAttachedFileName('');

    // Simulate coordinator typing & helpful medical reply
    dispatch(setTyping(true));
    setTimeout(() => {
      dispatch(setTyping(false));

      let reply = 'Thank you for your message! I am reviewing your request with our medical desk right now and will update your dashboard files immediately.';
      const lower = textToSend.toLowerCase();

      if (lower.includes('visa')) {
        reply = 'For your Indian Medical Visa, we have already issued your official Hospital Visa Assistance Letter (VAL). Simply submit this along with your passport scan on the Indian e-Visa portal. Processing takes 48-72 hours.';
      } else if (lower.includes('airport') || lower.includes('wheelchair') || lower.includes('flight')) {
        reply = 'Yes, complimentary wheelchair assistance is confirmed for your arrival at Delhi Terminal 3. Our driver Rajesh Kumar (+91 98101 22334) will be waiting at Gate 4 with a name placard.';
      } else if (lower.includes('payment') || lower.includes('counter') || lower.includes('card')) {
        reply = 'You can pay the hospital directly at Fortis billing desk using international credit/debit card, wire transfer, or cash in USD/INR. There are no advance deposits required by Hokena Care.';
      } else if (lower.includes('doctor') || lower.includes('round')) {
        reply = 'Dr. Ashok Rajgopal and his surgical team conduct morning clinical rounds between 08:30 AM and 10:00 AM daily, followed by physiotherapy evaluations in the afternoon.';
      }

      dispatch(receiveCoordinatorReply(reply));
    }, 1400);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAttachedFileName(file.name);
      showToast(`Attached: ${file.name}`, 'info');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col h-[650px] overflow-hidden">
      {/* Coordinator Header */}
      <div className="p-4 bg-[#073B57] text-white flex items-center justify-between border-b border-[#0B5678]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=150&q=80"
              alt="Coordinator"
              className="w-11 h-11 rounded-xl object-cover border-2 border-emerald-400"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#073B57]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-white">Ms. Priya Sharma</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Online
              </span>
            </div>
            <p className="text-xs text-slate-300">Senior International Patient Care Manager</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919871044210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="tel:+919871044210"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Call Desk"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
        <div className="text-center my-2">
          <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-semibold text-slate-500 shadow-2xs">
            Encrypted Patient Communication Channel • Fortis & Hokena Desk
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[75%]">
              {!msg.isUser && (
                <img
                  src={msg.senderAvatar}
                  alt={msg.senderName}
                  className="w-7 h-7 rounded-lg object-cover mb-1 border border-slate-200"
                />
              )}
              <div
                className={`p-3.5 rounded-2xl text-xs leading-relaxed shadow-2xs ${
                  msg.isUser
                    ? 'bg-[#073B57] text-white rounded-br-xs'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                }`}
              >
                {!msg.isUser && (
                  <span className="font-bold text-[11px] text-[#0B5678] block mb-1">
                    {msg.senderName}
                  </span>
                )}
                <p className="whitespace-pre-line">{msg.text}</p>

                {msg.attachment && (
                  <div className="mt-2 p-2 rounded-lg bg-black/10 flex items-center gap-2 text-[11px] font-medium">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="truncate">{msg.attachment}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1 px-1">
              <span>{msg.time}</span>
              {msg.isUser && <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#FF791B] animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-[#FF791B] animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-[#FF791B] animate-bounce [animation-delay:0.4s]" />
            <span className="text-[11px] text-slate-400 italic">Priya Sharma is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Inquiry Chips */}
      <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <Sparkles className="w-3.5 h-3.5 text-[#FF791B] flex-shrink-0" />
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(chip)}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-[#073B57] text-[11px] font-medium text-slate-600 transition-colors flex-shrink-0 border border-slate-200/60"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex flex-col gap-2"
      >
        {attachedFileName && (
          <div className="flex items-center justify-between bg-orange-50 px-3 py-1.5 rounded-lg text-xs text-[#073B57] border border-orange-200">
            <span className="truncate flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#FF791B]" />
              Attached: {attachedFileName}
            </span>
            <button
              type="button"
              onClick={() => setAttachedFileName('')}
              className="text-slate-400 hover:text-slate-600 font-bold ml-2"
            >
              ×
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2.5 rounded-xl text-slate-500 hover:text-[#073B57] hover:bg-slate-100 transition-colors"
            title="Attach Document"
          >
            <Paperclip className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message to Priya Sharma..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-hidden focus:border-[#FF791B] focus:ring-1 focus:ring-[#FF791B]"
          />

          <button
            type="submit"
            className="bg-[#FF791B] hover:bg-[#e6680f] text-white p-2.5 rounded-xl transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
