import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, XAxis, YAxis,  Line, CartesianGrid,  } from "recharts"


const data = [
    { dateWeek: 'segunda-feira', value: 90 },
    { dateWeek: 'terça-feira', value: 30 },
    { dateWeek: 'quarta-feira', value: 50 },
    { dateWeek: 'quinta-feira', value: 10 },
    { dateWeek: 'sexta-feira', value: 80 },
]


export function TicketChart(){
    return(
        <Card className="col-span-6" >
            <CardHeader className="flex-row items-center justify-between pb-8 " >
                <div className="space-y-1" >
                <CardTitle className=" text-base  " >Ticket por Dia</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240} >
                    <LineChart data={data} style={{ fontSize: 12 }} >
                        <XAxis axisLine={false} tickLine={false} dataKey="dateWeek" dy={12} />

                        <YAxis axisLine={false} tickLine={false}  />

                        <Line  type="monotone" strokeWidth={2} dataKey="value" />

                        <CartesianGrid vertical={false} className="stroke-muted" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}