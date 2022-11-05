// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Redirect,
//   Outlet,
//   Link,
// } from "react-router-dom";
// import Login from "./pages/Login";

// const FluviusRoutes = () => {
//   // const routes = [
//   //   {
//   //     path:"/",
//   //     element: () =>
//   //       import("./pages/Login.js").then((module) => (
//   //         <module.default />
//   //       )),
//   //   },
//   //   {
//   //     path: "categories",
//   //     element: () =>
//   //       import("./pages/category/CategoryIndex").then(
//   //         true ? (module) => <module.default /> : () => <p>GEEN TOEGANG</p>
//   //       ),
//   //   },
//   //   {
//   //     path: "category",
//   //     children: [
//   //       {
//   //         path: ":id",
//   //         //ANDERE IMPORT
//   //         element: () =>
//   //           import("./pages/category/CategoryDetails").then((module) => (
//   //             <module.default />
//   //           )),
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     path: "template/create",
//   //     element: () =>
//   //       import("./pages/CreateTemplate.js").then((module) => (
//   //         <module.default />
//   //       )),
//   //   },
//   //   {
//   //     path: "csr",
//   //     children: [
//   //       {
//   //         path: "all",
//   //         element: () =>
//   //           import("./pages/csr/CSROverview").then((module) => (
//   //             <module.default />
//   //           )),
//   //       },
//   //       {
//   //         path: ":id",
//   //         element: () =>
//   //           import("./pages/csr/CSRDetails").then((module) => (
//   //             <module.default />
//   //           )),
//   //       },
//   //     ],
//   //   },
//   // ];

//   // const location = new ReactLocation();

//   const routes = [
//     {
//       path: "/test",
//       element: <Login />,
//       // children: [
//       //   { index: true, element: <Home /> },
//       //   {
//       //     path: "/courses",
//       //     element: <Courses />,
//       //     children: [
//       //       { index: true, element: <CoursesIndex /> },
//       //       { path: "/courses/:id", element: <Course /> },
//       //     ],
//       //   },
//       //   { path: "*", element: <NoMatch /> },
//       // ],
//     },
//   ];

//   return routes;
//   // <Router>
//   //   <Routes>
//   //     <Route path="/test" extact>
//   //       <Login />
//   //     </Route>
//   //   </Routes>
//   // </Router>
// };

// export default FluviusRoutes;

import React, { createContext, useMemo, useContext } from "react";
import Login from "./pages/Login";
import { useRoutes } from "react-router-dom";

export const FluviusRouter_Context = createContext();
export const useFluviusRouter = () => useContext(FluviusRouter_Context);

export const FluviusRouter_Provider = ({ children }) => {
  const routes = [
    {
      path: "/test",
      element: <Login />,
      // children: [
      //   { index: true, element: <Home /> },
      //   {
      //     path: "/courses",
      //     element: <Courses />,
      //     children: [
      //       { index: true, element: <CoursesIndex /> },
      //       { path: "/courses/:id", element: <Course /> },
      //     ],
      //   },
      //   { path: "*", element: <NoMatch /> },
      // ],
    },
  ];

  const allRoutes = useRoutes(routes);

  const value = useMemo(
    () => ({
      allRoutes,
    }),
    [allRoutes]
  );

  return (
    <FluviusRouter_Context.Provider value={value}>
      {children}
    </FluviusRouter_Context.Provider>
  );
};
