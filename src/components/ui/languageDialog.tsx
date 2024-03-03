import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './shadcn/dialog'
import { Button } from './shadcn/button'
import { MdTranslate } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

interface LanguageDialogProps {
  color: string
}
export function LanguageDialog({ color }: LanguageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="bg-transparent border-0 hover:bg-transparent gap-2 -ml-2.5"
      >
        <Button
          variant="outline"
          className={`${color} text-base font-semibold hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300`}
        >
          <MdTranslate />
          Languague
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md dark:bg-zinc-800">
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <MdTranslate />
            Language
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogDescription className="flex flex-col gap-2 items-start">
          <Button
            type="button"
            variant="secondary"
            className="w-full flex text-left items-center gap-2 justify-start transition-all duration-200 hover:bg-blue-400 "
          >
            <FiArrowRight /> English
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full flex text-left items-center gap-2 justify-start transition-all duration-200 hover:bg-blue-400 "
          >
            <FiArrowRight /> Portuguese
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
