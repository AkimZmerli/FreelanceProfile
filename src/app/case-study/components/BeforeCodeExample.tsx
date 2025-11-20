"use client"

const BeforeCodeExample = () => {
  return (
    <div className="p-6 overflow-auto max-h-[400px]">
      <div className="text-xs font-mono space-y-1">
        <div className="text-gray-400">{`// ❌ Before: Monolithic Property Page (2k+ lines)`}</div>
        <div className="text-white">export default function PropertyPage({`{ params }`}) {`{`}</div>
        <div className="text-white">  const {`{ id }`} = use(params);</div>
        <div className="text-red-400">  const {`{ getToken }`} = useAuth(); <span className="text-red-300">{`// Auth mixed in`}</span></div>
        <div className="text-white mt-2"> </div>
        <div className="text-blue-400">  {`// Data fetching mixed with rendering logic`}</div>
        <div className="text-blue-300">  const [buildingData, setBuildingData] = useState(null);</div>
        <div className="text-blue-300">  const [metrics, setMetrics] = useState(null);</div>
        <div className="text-blue-300">  const [climateData, setClimateData] = useState(null);</div>
        <div className="text-white mt-2"> </div>
        <div className="text-blue-400">  useEffect(() =&gt; {"{"}</div>
        <div className="text-red-300">    {`// Authentication and data fetching all in one place`}</div>
        <div className="text-blue-300">    const fetchAllData = async () =&gt; {"{"}</div>
        <div className="text-blue-300">      try {"{"}</div>
        <div className="text-red-300">        const token = await getToken();</div>
        <div className="text-blue-300">        const [building, metricsRes, climate] = await Promise.all([</div>
        <div className="text-blue-300">          fetch(`/api/buildings/${"{"}{`{id}`}{"}"}`), {`{ headers: { Authorization: \`Bearer $\{token\}\` } }`}</div>
        <div className="text-blue-300">          fetch(`/api/metrics/${"{"}{`{id}`}{"}"}`), {`{ headers: { Authorization: \`Bearer $\{token\}\` } }`}</div>
        <div className="text-blue-300">          fetch(`/api/climate/${"{"}{`{id}`}{"}"}`), {`{ headers: { Authorization: \`Bearer $\{token\}\` } }`}</div>
        <div className="text-blue-300">        ]);</div>
        <div className="text-white mt-1"> </div>
        <div className="text-blue-300">        setBuildingData(await building.json());</div>
        <div className="text-blue-300">        setMetrics(await metricsRes.json());</div>
        <div className="text-blue-300">        setClimateData(await climate.json());</div>
        <div className="text-orange-400">      {"}"} catch (error) {"{"}</div>
        <div className="text-orange-400">        {`// Error handling mixed with business logic`}</div>
        <div className="text-orange-400">        console.error(&quot;Failed to fetch data:&quot;, error);</div>
        <div className="text-orange-400">      {"}"}</div>
        <div className="text-blue-300">    {"}"};</div>
        <div className="text-blue-300">    fetchAllData();</div>
        <div className="text-blue-400">  {"}"}, [id, getToken]);</div>
        <div className="text-white mt-2"> </div>
        <div className="text-green-400">  {`// Rendering logic mixed with data processing`}</div>
        <div className="text-green-300">  return (</div>
        <div className="text-green-300">    {"<div>"}</div>
        <div className="text-green-300">      {"/* Massive JSX with inline business logic */"}</div>
        <div className="text-green-300">      {"{buildingData && ("}</div>
        <div className="text-green-300">        {"<div>"}</div>
        <div className="text-green-300">          {"<h1>{buildingData.address}</h1>"}</div>
        <div className="text-green-400">          {"/* Climate analysis inline */"}</div>
        <div className="text-green-300">          {"<div className=\"climate-section\">"}</div>
        <div className="text-green-300">            {"{climateData?.riskLevel > 5 && ("}</div>
        <div className="text-green-300">              {"<div className=\"risk-warning\">"}</div>
        <div className="text-green-300">                {"High risk detected: {climateData.riskDetails}"}</div>
        <div className="text-green-300">              {"</div>"}</div>
        <div className="text-green-300">            {")"}</div>
        <div className="text-green-400">            {"/* More inline business logic... */"}</div>
        <div className="text-green-300">          {"</div>"}</div>
        <div className="text-green-400">          {"/* Measures section inline */"}</div>
        <div className="text-green-300">          {"<div className=\"measures\">"}</div>
        <div className="text-green-300">            {"{metrics?.adaptationMeasures?.map((measure) => ("}</div>
        <div className="text-green-300">              {"<div key={measure.id} className=\"measure-card\">"}</div>
        <div className="text-green-400">                {"/* Complex inline rendering logic */"}</div>
        <div className="text-green-300">              {"</div>"}</div>
        <div className="text-green-300">            {")"}</div>
        <div className="text-green-300">          {"</div>"}</div>
        <div className="text-green-300">        {"</div>"}</div>
        <div className="text-green-300">      {")"}</div>
        <div className="text-green-300">    {"</div>"}</div>
        <div className="text-green-300">  );</div>
        <div className="text-white">{"}"}</div>
      </div>
    </div>
  );
};

export default BeforeCodeExample;