"use client"

const BeforeCodeExample = () => {
  return (
    <div className="p-6 overflow-auto max-h-[400px]">
      <div className="text-xs font-mono space-y-1">
        <div className="text-gray-400">{`// ❌ Before: Monolithic Dashboard Page (2k+ lines)`}</div>
        <div className="text-white">export default function DashboardPage({`{ params }`}) {`{`}</div>
        <div className="text-white">  const {`{ id }`} = use(params);</div>
        <div className="text-red-400">  const {`{ user, session }`} = useSession(); <span className="text-red-300">{`// Auth mixed in`}</span></div>
        <div className="text-white mt-2"> </div>
        <div className="text-blue-400">  {`// Data fetching mixed with rendering logic`}</div>
        <div className="text-blue-300">  const [userData, setUserData] = useState(null);</div>
        <div className="text-blue-300">  const [analytics, setAnalytics] = useState(null);</div>
        <div className="text-blue-300">  const [preferences, setPreferences] = useState(null);</div>
        <div className="text-white mt-2"> </div>
        <div className="text-blue-400">  useEffect(() =&gt; {"{"}</div>
        <div className="text-red-300">    {`// Authentication and data fetching all in one place`}</div>
        <div className="text-blue-300">    const fetchAllData = async () =&gt; {"{"}</div>
        <div className="text-blue-300">      try {"{"}</div>
        <div className="text-red-300">        const authHeader = session?.accessToken;</div>
        <div className="text-blue-300">        const [userRes, analyticsRes, prefsRes] = await Promise.all([</div>
        <div className="text-blue-300">          fetch(`/api/users/${"{"}{`{id}`}{"}"}`), {`{ headers: { Cookie: document.cookie } }`}</div>
        <div className="text-blue-300">          fetch(`/api/analytics/${"{"}{`{id}`}{"}"}`), {`{ headers: { Cookie: document.cookie } }`}</div>
        <div className="text-blue-300">          fetch(`/api/preferences/${"{"}{`{id}`}{"}"}`), {`{ headers: { Cookie: document.cookie } }`}</div>
        <div className="text-blue-300">        ]);</div>
        <div className="text-white mt-1"> </div>
        <div className="text-blue-300">        setUserData(await userRes.json());</div>
        <div className="text-blue-300">        setAnalytics(await analyticsRes.json());</div>
        <div className="text-blue-300">        setPreferences(await prefsRes.json());</div>
        <div className="text-orange-400">      {"}"} catch (error) {"{"}</div>
        <div className="text-orange-400">        {`// Error handling mixed with business logic`}</div>
        <div className="text-orange-400">        console.error(&quot;Failed to fetch data:&quot;, error);</div>
        <div className="text-orange-400">      {"}"}</div>
        <div className="text-blue-300">    {"}"};</div>
        <div className="text-blue-300">    fetchAllData();</div>
        <div className="text-blue-400">  {"}"}, [id, session]);</div>
        <div className="text-white mt-2"> </div>
        <div className="text-green-400">  {`// Rendering logic mixed with data processing`}</div>
        <div className="text-green-300">  return (</div>
        <div className="text-green-300">    {"<div>"}</div>
        <div className="text-green-300">      {"/* Massive JSX with inline business logic */"}</div>
        <div className="text-green-300">      {"{userData && ("}</div>
        <div className="text-green-300">        {"<div>"}</div>
        <div className="text-green-300">          {"<h1>{userData.displayName}</h1>"}</div>
        <div className="text-green-400">          {"/* Analytics processing inline */"}</div>
        <div className="text-green-300">          {"<div className=\"analytics-section\">"}</div>
        <div className="text-green-300">            {"{analytics?.score > 80 && ("}</div>
        <div className="text-green-300">              {"<div className=\"success-banner\">"}</div>
        <div className="text-green-300">                {"Performance goal achieved: {analytics.details}"}</div>
        <div className="text-green-300">              {"</div>"}</div>
        <div className="text-green-300">            {")"}</div>
        <div className="text-green-400">            {"/* More inline business logic... */"}</div>
        <div className="text-green-300">          {"</div>"}</div>
        <div className="text-green-400">          {"/* Settings section inline */"}</div>
        <div className="text-green-300">          {"<div className=\"settings\">"}</div>
        <div className="text-green-300">            {"{preferences?.customizations?.map((setting) => ("}</div>
        <div className="text-green-300">              {"<div key={setting.id} className=\"setting-card\">"}</div>
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