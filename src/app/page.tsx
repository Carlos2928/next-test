import {Button} from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Euro, Percent, Receipt, User } from 'lucide-react'
import  ChartOverview  from '@/components/chart'


export default function Sidebar (){
  return (
      <main className='sm:ml-14 p-4'>
       <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                  <CardTitle className='text-lg sm:text-x1 text-gray-800 select-none'>
                    Total vendas
                  </CardTitle>
                  <Euro className='ml-auto w-4 h-4'/>
                </div>
                <CardDescription>
                    Total de Venda em 90 dias 
                </CardDescription>
                <CardContent>
                  <p className='text-base sm:text-lg font-bold'>€20.000</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                  <CardTitle className='text-lg sm:text-x1 text-gray-800 select-none'>
                    Novos Clienetes
                  </CardTitle>
                  <User className='ml-auto w-4 h-4'/>
                </div>
                <CardDescription>
                    Novos Clientes em 30 dias 
                </CardDescription>
                <CardContent>
                  <p className='text-base sm:text-lg font-bold'>560</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                  <CardTitle className='text-lg sm:text-x1 text-gray-800 select-none'>
                    Pedidos Hoje
                  </CardTitle>
                  <Percent className='ml-auto w-4 h-4'/>
                </div>
                <CardDescription>
                    Total de Pedidos Hoje
                </CardDescription>
                <CardContent>
                  <p className='text-base sm:text-lg font-bold'>65</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                  <CardTitle className='text-lg sm:text-x1 text-gray-800 select-none'>
                    Total Pedidos 
                  </CardTitle>
                  <Receipt className='ml-auto w-4 h-4'/>
                </div>
                <CardDescription>
                    Total de Pedidos em 30 Dias
                </CardDescription>
                <CardContent>
                  <p className='text-base sm:text-lg font-bold'>6.525</p>
                </CardContent>
            </CardHeader>
          </Card>
       </section>

       <section className='mt-4 flex flex-col md:flex-row gap-4'>
       <ChartOverview>

       </ChartOverview>
       </section>

      </main>
  );
}
