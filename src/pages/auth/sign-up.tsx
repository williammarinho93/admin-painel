import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner'
import { Link } from "react-router-dom"


const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>


export function SignUp(){
    //inserir o useNavigation

    const { register, handleSubmit, formState:{isSubmitting} } = useForm<SignUpForm>()

    async function handleSignUp(data:SignUpForm) {
        try{
        console.log(data)
        await new Promise(resolve => setTimeout(resolve, 2000))

        toast.success('Acesso autorizado', {
            action: {
                label: 'Reenviar',
                onClick: () => handleSignUp(data),
            },
        })
    } catch{
        toast.error('credencial invalido')
    }}

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
            <Button variant="ghost" asChild className="absolute right-8 top-8" >
                <Link to="/sign-in" > 
                Fazer login
                 </Link>
                 </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar Conta</h1>
                        <p className="text-sm text-muted-foreground">Seja um Parceiro</p>
                    </div>


                    <form  onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName" > Nome do estabelicimento </Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} ></Input>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="managerName" > Seu Email </Label>
                            <Input id="managerName" type="text" {...register('managerName')} ></Input>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" > Seu Celular </Label>
                            <Input id="phone" type="tel" {...register('phone')} ></Input>
                        </div>

                        <Button disabled={isSubmitting} type="submit">Finalizar cadastro</Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground ">
                            ao continuar você concorda com nossos termos
                        </p>
                    </form>
                </div>
            </div>
        
        </>
        
    )
}