import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  GreetingPageContainer,
  SignUpPageContainer,
} from "../../../signUpService/signUpService.container";
import { SignInPageContainer } from "../../../signInService/signInService.container";
import { NotAuthLayout } from "./components/NotAuthLayout";
import { AuthLayout } from "./components/AuthLayout";
import { authService } from "../../../authService";
import { useStore } from "effector-react";
import { DashboardPageContainer } from "../../../dashboardService/dashboardService.container";
import { DeskContainer } from "../../../deskService/deskService.container";
import { AccountPageContainer } from "../../../userService/userService.container";

export const Router = () => {
  const isAuth = useStore(authService.outputs.$isAuth);

  const { AuthGate } = authService.inputs;

  return (
    <BrowserRouter>
      <AuthGate />
      <Routes>
        {!isAuth && (
          <Route element={<NotAuthLayout />}>
            <Route path="/SignUp" element={<SignUpPageContainer />} />
            <Route path="/SignIn" element={<SignInPageContainer />} />
            <Route path="/" element={<GreetingPageContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
        {isAuth && (
          <Route element={<AuthLayout />}>
            <Route path="/Dashboard" element={<DashboardPageContainer />} />
            <Route path="Account" element={<AccountPageContainer />} />
            <Route path="/Desk/:id" element={<DeskContainer />} />
            <Route path="*" element={<Navigate to="/Dashboard" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
