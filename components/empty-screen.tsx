import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: '¿Qué hacen en Blumb?',
    message: `¿Qué servicios ofrecen en Blumb?`
  },
  {
    heading: 'Proyectos en los que han trabajado',
    message: 'Muéstrame casos de éxito en Blumb: \n'
  },
  {
    heading: 'Sobre su método de asesoría',
    message: `¿En qué consiste el método de asesoría? \n`
  },
  {
    heading: 'Sobre el equipo de Blumb',
    message: `¿Cómo esta formado su equipo? \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          ¡Bienvenidos a Blumb!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
         Soy Blumbot y responderé cualquier duda que tengas sobre nuestra empresa{' '}
          <ExternalLink href="https://blumb.ai">Blumb</ExternalLink>.
        </p>
        <p className="leading-normal text-muted-foreground">
          Puedes hacerme cualquier pregunta, te ayudo:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
