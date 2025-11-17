"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Code2, GitCompare, CheckCircle, XCircle, Copy, Eye } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { useState } from "react";

const CodeComparison = () => {
  const [activeView, setActiveView] = useState<"before" | "after" | "split">("split");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const codeExamples = {
    before: {
      title: "Before: Monolithic Property Page",
      file: "property/[id]/page.tsx",
      issues: ["2000+ lines", "Mixed concerns", "No testing", "Poor DX"],
      code: `"use client";
export default function PropertyPage({ params }) {
  const { id } = use(params);
  const { getToken } = useAuth(); // Auth mixed in
  
  // Data fetching mixed with rendering logic
  const [buildingData, setBuildingData] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [climateData, setClimateData] = useState(null);
  
  useEffect(() => {
    // Authentication and data fetching all in one place
    const fetchAllData = async () => {
      try {
        const token = await getToken();
        const [building, metricsRes, climate] = await Promise.all([
          fetch(\`/api/buildings/\${id}\`, {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
          fetch(\`/api/metrics/\${id}\`, {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
          fetch(\`/api/climate/\${id}\`, {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
        ]);
        
        setBuildingData(await building.json());
        setMetrics(await metricsRes.json());
        setClimateData(await climate.json());
      } catch (error) {
        // Error handling mixed with business logic
        console.error("Failed to fetch data:", error);
      }
    };
    
    fetchAllData();
  }, [id, getToken]);
  
  // Rendering logic mixed with data processing
  return (
    <div>
      {/* Massive JSX with inline business logic */}
      {buildingData && (
        <div>
          <h1>{buildingData.address}</h1>
          {/* Climate analysis inline */}
          <div className="climate-section">
            {climateData?.riskLevel > 5 && (
              <div className="risk-warning">
                High risk detected: {climateData.riskDetails}
              </div>
            )}
            {/* More inline business logic... */}
          </div>
          {/* Measures section inline */}
          <div className="measures">
            {metrics?.adaptationMeasures?.map((measure) => (
              <div key={measure.id} className="measure-card">
                {/* Complex inline rendering logic */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}`
    },
    after: {
      title: "After: Clean Orchestration",
      file: "property/[id]/page.tsx",
      benefits: ["Clean separation", "Testable", "Maintainable", "Scalable"],
      code: `"use client";
import { use } from "react";
import { PropertyHeader } from "./components/PropertyHeader";
import { ClimateAnalysis } from "./features/climate-analysis/ClimateAnalysis";
import { AdaptationPlanning } from "./features/adaptation-planning/AdaptationPlanning";
import { PropertyMap } from "./features/property-map/PropertyMap";
import { useBuildingData } from "./hooks/use-building-data";
import { useClimateData } from "./hooks/use-climate-data";
import { usePropertyUI } from "./hooks/use-property-ui";

export default function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  
  // Clean separation of concerns
  const buildingData = useBuildingData(id);
  const climateData = useClimateData(id);
  const uiState = usePropertyUI();
  
  if (buildingData.isLoading) return <PropertyLoadingState />;
  if (buildingData.error) return <PropertyErrorState error={buildingData.error} />;
  
  return (
    <div className="property-layout">
      <PropertyHeader building={buildingData.data} />
      
      <div className="property-content">
        <ClimateAnalysis 
          data={climateData.data}
          isLoading={climateData.isLoading}
        />
        
        <AdaptationPlanning
          buildingId={id}
          measures={climateData.data?.measures}
        />
        
        <PropertyMap
          coordinates={buildingData.data?.coordinates}
          riskData={climateData.data?.risks}
        />
      </div>
    </div>
  );
}`
    },
    hooks: {
      title: "Supporting Hook: Clean Data Layer",
      file: "hooks/use-building-data.ts",
      code: `// hooks/use-building-data.ts - Separated data concern
import { useClerkSWR } from "~/lib/axios-instance";
import { buildingUrl } from "~/url-stubs";

export function useBuildingData(buildingId: string) {
  const { data, error, isLoading } = useClerkSWR(
    buildingId ? \`\${buildingUrl}/\${buildingId}\` : null
  );
  
  return {
    data,
    error,
    isLoading,
    // Computed properties for UI
    hasCoordinates: Boolean(data?.lat && data?.lon),
    riskLevel: data?.riskSummary || 0,
  };
}

// hooks/use-climate-data.ts - Separated climate concern
export function useClimateData(buildingId: string) {
  const { data: metrics } = useClerkSWR(\`/api/metrics/\${buildingId}\`);
  const { data: measures } = useClerkSWR(\`/api/measures/\${buildingId}\`);
  
  return {
    data: {
      metrics,
      measures,
      risks: metrics?.risks,
    },
    isLoading: !metrics || !measures,
  };
}`
    }
  };

  const handleCopyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const metrics = [
    { label: "Lines of Code", before: "2000+", after: "185", improvement: "91%" },
    { label: "Complexity", before: "High", after: "Low", improvement: "Simplified" },
    { label: "Test Coverage", before: "0%", after: "87%", improvement: "+87%" },
    { label: "Bundle Size", before: "727 KB", after: "489 KB", improvement: "-33%" }
  ];

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge className="gap-2">
          <GitCompare className="h-4 w-4" />
          Code Transformation
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Before & After: Real Code Examples
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          See the dramatic transformation from monolithic chaos to clean, maintainable architecture
        </p>
      </motion.div>

      {/* View Switcher */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-2"
      >
        {["before", "after", "split"].map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view as any)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeView === view
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-2">
              {view === "split" && <Eye className="h-4 w-4" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </div>
          </button>
        ))}
      </motion.div>

      {/* Code Comparison Cards */}
      <div className={`grid ${activeView === "split" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"} gap-6`}>
        {/* Before Code */}
        {(activeView === "before" || activeView === "split") && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full relative overflow-hidden border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-400" />
                    {codeExamples.before.title}
                  </CardTitle>
                  <button
                    onClick={() => handleCopyCode(codeExamples.before.code, "before")}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedCode === "before" ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-white/60" />
                    )}
                  </button>
                </div>
                <div className="flex gap-2 mt-2">
                  {codeExamples.before.issues.map((issue) => (
                    <Badge key={issue} variant="destructive" className="text-xs">
                      {issue}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="relative max-h-[600px] overflow-auto">
                  <pre className="p-6 text-xs md:text-sm">
                    <code className="language-typescript text-white/80">
                      {codeExamples.before.code}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* After Code */}
        {(activeView === "after" || activeView === "split") && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full relative overflow-hidden border-green-500/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    {codeExamples.after.title}
                  </CardTitle>
                  <button
                    onClick={() => handleCopyCode(codeExamples.after.code, "after")}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedCode === "after" ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-white/60" />
                    )}
                  </button>
                </div>
                <div className="flex gap-2 mt-2">
                  {codeExamples.after.benefits.map((benefit) => (
                    <Badge key={benefit} className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="relative max-h-[600px] overflow-auto">
                  <pre className="p-6 text-xs md:text-sm">
                    <code className="language-typescript text-white/80">
                      {codeExamples.after.code}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Supporting Hooks Example */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="relative overflow-hidden border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader className="border-b border-white/10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Code2 className="h-5 w-5 text-cyan-400" />
                {codeExamples.hooks.title}
              </CardTitle>
              <button
                onClick={() => handleCopyCode(codeExamples.hooks.code, "hooks")}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {copiedCode === "hooks" ? (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-white/60" />
                )}
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="relative max-h-[400px] overflow-auto">
              <pre className="p-6 text-xs md:text-sm">
                <code className="language-typescript text-white/80">
                  {codeExamples.hooks.code}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Metrics Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2">
          <CardHeader>
            <CardTitle className="text-xl text-white">Impact Metrics</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-lg"
                >
                  <div className="text-xs text-white/60 mb-2">{metric.label}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-red-400 font-mono text-sm">{metric.before}</span>
                    <span className="text-white/40">→</span>
                    <span className="text-green-400 font-mono text-sm">{metric.after}</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    {metric.improvement}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CodeComparison;