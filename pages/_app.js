import { GlobalProvider } from "@utils/GlobalContext";
import { UserProvider } from "@utils/useUser";
import { AxiosConfigProvider } from "@utils/useAxiosConfig";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <UserProvider>
        <AxiosConfigProvider>
          <Component {...pageProps} />
        </AxiosConfigProvider>
      </UserProvider>
    </GlobalProvider>
  )
}

export default MyApp
