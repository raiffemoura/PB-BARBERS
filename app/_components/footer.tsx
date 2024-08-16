import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="mt-4">
      <Card className="px-5 py-6">
        <CardContent>
          <p className="text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold"> PB Barbers</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
