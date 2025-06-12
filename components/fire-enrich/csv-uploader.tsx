'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { CSVRow } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, FileSpreadsheet, ChevronDown, ChevronUp, Zap, Mail, Download, Users } from 'lucide-react';
import { OUTRICH_CONFIG, ERROR_MESSAGES } from './config';

interface CSVUploaderProps {
  onUpload: (rows: CSVRow[], columns: string[]) => void;
}

const sampleEnrichedData = [
  { email: 'john@acme.com', name: 'John Smith', company: 'Acme Corp', title: 'CEO', phone: '+1-555-0123', linkedin: 'linkedin.com/in/johnsmith' },
  { email: 'sarah@techco.com', name: 'Sarah Johnson', company: 'TechCo Inc', title: 'CTO', phone: '+1-555-0456', linkedin: 'linkedin.com/in/sarahj' },
  { email: 'mike@startup.io', name: 'Mike Brown', company: 'Startup.io', title: 'Founder', phone: '+1-555-0789', linkedin: 'linkedin.com/in/mikebrown' }
];

export function CSVUploader({ onUpload }: CSVUploaderProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const loadSampleData = useCallback(() => {
    const sampleRows = [
      { email: 'john@example.com', company: 'Example Corp' },
      { email: 'sarah@demo.com', company: 'Demo Inc' },
      { email: 'mike@test.io', company: 'Test Startup' }
    ];
    const sampleColumns = ['email', 'company'];
    onUpload(sampleRows, sampleColumns);
  }, [onUpload]);

  const processCSV = useCallback((file: File) => {
    setIsProcessing(true);
    setError(null);

    Papa.parse(file, {
      complete: (results) => {
        if (results.errors.length > 0) {
          setError(`CSV parsing error: ${results.errors[0].message}`);
          setIsProcessing(false);
          return;
        }

        if (!results.data || results.data.length === 0) {
          setError('CSV file is empty');
          setIsProcessing(false);
          return;
        }

        // Get headers from first row
        const headers = Object.keys(results.data[0] as object);
        const rows = results.data as CSVRow[];

        // Check column limit
        if (headers.length > OUTRICH_CONFIG.CSV_LIMITS.MAX_COLUMNS) {
          setError(
            `${ERROR_MESSAGES.TOO_MANY_COLUMNS}\n${ERROR_MESSAGES.UPGRADE_PROMPT}`
          );
          setIsProcessing(false);
          return;
        }

        // Filter out empty rows
        const validRows = rows.filter(row => 
          Object.values(row).some(value => value && String(value).trim() !== '')
        );

        if (validRows.length === 0) {
          setError('No valid data rows found in CSV');
          setIsProcessing(false);
          return;
        }

        // Check row limit
        if (validRows.length > OUTRICH_CONFIG.CSV_LIMITS.MAX_ROWS) {
          setError(
            `${ERROR_MESSAGES.TOO_MANY_ROWS}\n${ERROR_MESSAGES.UPGRADE_PROMPT}`
          );
          setIsProcessing(false);
          return;
        }

        setIsProcessing(false);
        onUpload(validRows, headers);
      },
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
      transform: (value) => value.trim(),
    });
  }, [onUpload]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      processCSV(acceptedFiles[0]);
    }
  }, [processCSV]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv'],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-1">Upload Your CSV File</h2>
        <p className="text-sm text-muted-foreground">
          Start by uploading a CSV file containing email addresses
        </p>
      </div>

      {/* Subtle background pattern */}
      <div className="relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div
          {...getRootProps()}
          className={`
            relative overflow-hidden
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-all duration-300 ease-out
            ${isDragActive 
              ? 'border-orange-500 bg-orange-50 scale-[1.02] shadow-xl dark:bg-orange-950/20 dark:border-orange-400' 
              : 'border-zinc-300 hover:border-orange-400 bg-white hover:bg-orange-50/30 hover:shadow-lg hover:scale-[1.01] dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-orange-950/10 dark:hover:border-orange-700'
            }
            ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <input {...getInputProps()} disabled={isProcessing} />
          
          <div className="relative">
            <div className={`
              w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center
              transition-all duration-300
              ${isDragActive ? 'bg-orange-500 scale-110 rotate-3' : 'bg-orange-500'}
            `}>
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
            
            {isDragActive ? (
              <div className="animate-fade-in">
                <p className="text-xl font-semibold text-orange-600 mb-1">Drop it here!</p>
                <p className="text-sm text-muted-foreground">We&apos;ll start processing immediately</p>
              </div>
            ) : (
              <>
                <p className="text-lg font-medium text-[#36322F] mb-1 dark:text-white">
                  Drag & drop your CSV file here
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse from your computer
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="orange"
                    size="sm"
                    disabled={isProcessing}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Select CSV File
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      loadSampleData();
                    }}
                    disabled={isProcessing}
                  >
                    Try with sample data
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate-fade-in dark:bg-red-950/20 dark:border-red-900/30 dark:text-red-400">
          <p className="font-semibold mb-1">Error:</p>
          <p className="text-sm whitespace-pre-line">{error}</p>
        </div>
      )}

      {isProcessing && (
        <div className="mt-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-100 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <p className="text-sm font-medium text-orange-700">Processing CSV file...</p>
          </div>
        </div>
      )}

      {/* Enhanced info cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Enhanced Download Sample Card */}
        <div className="p-3 bg-orange-50 rounded-lg border border-orange-200 dark:bg-orange-950/20 dark:border-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
          <a 
            href="/sample-data.csv" 
            download="sample-data.csv"
            className="block"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <Download className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-sm font-medium text-[#36322F] dark:text-white">Download Sample</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">See what enriched data looks like</p>
            <div className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded">
              email, name, company, title, phone →
            </div>
          </a>
        </div>
        
        {/* Enhanced Email Required Card */}
        <div className="p-3 bg-zinc-100 rounded-lg border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#36322F] rounded flex items-center justify-center dark:bg-zinc-700">
              <Mail className="w-3 h-3 text-white" />
            </div>
            <h3 className="text-sm font-medium text-[#36322F] dark:text-white">Data Sources</h3>
          </div>
          <p className="text-xs text-muted-foreground">Email finder, social profiles, company data, phone verification</p>
        </div>
        
        {/* Processing Speed Card */}
        <div className="p-3 bg-zinc-100 rounded-lg border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#36322F] rounded flex items-center justify-center dark:bg-zinc-700">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <h3 className="text-sm font-medium text-[#36322F] dark:text-white">Processing Speed</h3>
          </div>
          <p className="text-xs text-muted-foreground">Average 2 seconds per contact • Bulk processing available</p>
        </div>
      </div>

      {/* See it in action demo section */}
      <div className="mt-6">
        <button
          onClick={() => setShowDemo(!showDemo)}
          className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:from-orange-100 hover:to-red-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">▶</span>
            </div>
            <span className="text-sm font-medium text-[#36322F]">See it in action</span>
            <Badge variant="outline" className="text-xs bg-white">Demo</Badge>
          </div>
          {showDemo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showDemo && (
          <div className="mt-3 p-4 bg-white rounded-lg border border-gray-200 animate-fade-in">
            <h4 className="text-sm font-medium text-[#36322F] mb-3">Sample Enriched Results</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-1 px-2 font-medium text-gray-600">Email</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-600">Name</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-600">Company</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-600">Title</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-600">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleEnrichedData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-1 px-2 text-blue-600">{row.email}</td>
                      <td className="py-1 px-2">{row.name}</td>
                      <td className="py-1 px-2">{row.company}</td>
                      <td className="py-1 px-2">{row.title}</td>
                      <td className="py-1 px-2 text-green-600">{row.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              ✨ From basic email list to complete contact profiles in seconds
            </p>
          </div>
        )}
      </div>

      {/* Urgency element */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
          <Users className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700 font-medium">
            Join 2,847 users who enriched leads this week
          </span>
        </div>
      </div>
    </div>
  );
}