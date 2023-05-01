import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home'
import {  QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()

//import { feedProducts } from './api'
//feedProducts();

export default function App() {

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}


