import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BookOpen, FileText, PenTool, FileSpreadsheet, Users } from 'lucide-react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './pages/KnowledgeBase';
import WritingAssistant from './pages/WritingAssistant';
import DocumentGeneration from './pages/DocumentGeneration';
import MaterialsManagement from './pages/MaterialsManagement';
import MeetingRecords from './pages/MeetingRecords';

export const modules = [
  { id: 1, name: '知识库管理', icon: BookOpen, color: 'text-blue-600', path: '/knowledge-base' },
  { id: 2, name: '写作辅助', icon: PenTool, color: 'text-green-600', path: '/writing-assistant' },
  { id: 3, name: '稿件生成', icon: FileText, color: 'text-purple-600', path: '/document-generation' },
  { id: 4, name: '材料工作', icon: FileSpreadsheet, color: 'text-orange-600', path: '/materials' },
  { id: 5, name: '会议记录', icon: Users, color: 'text-red-600', path: '/meetings' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard modules={modules} />} />
          <Route path="knowledge-base/*" element={<KnowledgeBase />} />
          <Route path="writing-assistant/*" element={<WritingAssistant />} />
          <Route path="document-generation/*" element={<DocumentGeneration />} />
          <Route path="materials/*" element={<MaterialsManagement />} />
          <Route path="meetings/*" element={<MeetingRecords />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;