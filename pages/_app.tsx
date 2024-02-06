import Wrapper from "@/layout/Wrapper/Wrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useThemeContext } from "@/theme/ThemeContextProvider";
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {


  return (


    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </QueryClientProvider>
  
  );
}
