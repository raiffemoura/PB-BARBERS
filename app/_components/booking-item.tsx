import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card className="">
        <CardContent className="flex justify-between p-0">
          {/* div da esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png" />
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>

          {/* div da direita */}
          <div className="flex flex-col items-center justify-center border-l-2 px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">10</p>
            <p className="text-sm">11:30</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
