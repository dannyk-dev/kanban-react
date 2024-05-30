import { Outlet } from "react-router-dom";
import ErrorBoundary from "./components/Error-Boundary";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="h-full w-full bg-gray-950  flex flex-col justify-evenly items-center pb-10">
      {/* Navigation here */}
      <h1 className="text-blue-400 text-2xl text-center py-5">
        <h1>Hello Peeps</h1>
      </h1>
      <div className="app-wrapper">
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
