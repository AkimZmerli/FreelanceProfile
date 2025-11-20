"use client"

const AfterCodeExample = () => {
  return (
    <div className="p-6 overflow-auto max-h-[400px]">
      <div className="text-xs font-mono space-y-1">
        <div className="text-gray-400">{`// ✅ After: Clean separation of concerns`}</div>
        <div className="text-white mt-2"> </div>
        <div className="text-cyan-400">{`// hooks/use-property-data.ts`}</div>
        <div className="text-cyan-300">function usePropertyData(id: string) {"{"}</div>
        <div className="text-cyan-300">  return useClerkSWR(`/api/property/${"{"}{`{id}`}{"}"}``);</div>
        <div className="text-cyan-300">{"}"}</div>
        <div className="text-white mt-2"> </div>
        <div className="text-purple-400">{`// hooks/use-property-ui.ts`}</div>
        <div className="text-purple-300">function usePropertyUI() {"{"}</div>
        <div className="text-purple-300">  const [activeTab, setActiveTab] = useState(0);</div>
        <div className="text-purple-300">  const [isModalOpen, setIsModalOpen] = useState(false);</div>
        <div className="text-white mt-1"> </div>
        <div className="text-purple-300">  return {"{"}</div>
        <div className="text-purple-300">    activeTab,</div>
        <div className="text-purple-300">    setActiveTab,</div>
        <div className="text-purple-300">    isModalOpen,</div>
        <div className="text-purple-300">    setIsModalOpen</div>
        <div className="text-purple-300">  {"}"}</div>
        <div className="text-purple-300">{"}"}</div>
        <div className="text-white mt-2"> </div>
        <div className="text-yellow-400">{`// utils/risk-calculations.ts`}</div>
        <div className="text-yellow-300">export function calculateRisk(</div>
        <div className="text-yellow-300">  data: PropertyData</div>
        <div className="text-yellow-300">): RiskLevel {"{"}</div>
        <div className="text-green-400">  {`// Pure function for business logic`}</div>
        <div className="text-yellow-300">{"}"}</div>
        <div className="text-white mt-2"> </div>
        <div className="text-blue-400">{`// components/PropertyPage.tsx`}</div>
        <div className="text-blue-300">function PropertyPage({"{"} id {"}"}: Props) {"{"}</div>
        <div className="text-cyan-300">  const propertyData = usePropertyData(id);</div>
        <div className="text-purple-300">  const uiState = usePropertyUI();</div>
        <div className="text-yellow-300">  const riskLevel = calculateRisk(propertyData.data);</div>
        <div className="text-white mt-1"> </div>
        <div className="text-blue-300">  return (</div>
        <div className="text-blue-300">    {"<PropertyLayout>"}</div>
        <div className="text-purple-300">      {"<PropertyTabs {...uiState} />"}</div>
        <div className="text-yellow-300">      {"<RiskDisplay level={riskLevel} />"}</div>
        <div className="text-blue-300">    {"</PropertyLayout>"}</div>
        <div className="text-blue-300">  );</div>
        <div className="text-blue-300">{"}"}</div>
      </div>
    </div>
  );
};

export default AfterCodeExample;