const data = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home sidebar!</div>,
    main: () => <h2>Home main</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum sidebar!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces sidebar!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/test",
    exact: true,
    sidebar: () => <div>home sidebar test!</div>,
    main: () => <h2>Home main test</h2>
  },
];

function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
  <div style={{ padding: "10px", width: "40%",background: "#f0f0f0"}}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/bubblegum">Bubblegum</Link></li>
            <li><Link to="/shoelaces">Shoelaces</Link></li>
          </ul> {data.map((route,index)=>(
              <Route
                  key={index}
                  path={route.path}
                  component={route.sidebar}
                  exact={route.exact}/>))}
         </div>
<div style={{ flex: 1, padding: "10px" }}>
         {data.map((anything,index)=>(
    <Route key={index} path={anything.path} exact = {anything.exact}
              component={anything.main}
           />
         ))}
        </div>
      </div>
    </Router>
  );
}
export default SidebarExample;