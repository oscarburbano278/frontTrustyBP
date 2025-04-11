import { createFileRoute } from '@tanstack/react-router'
import FormRecovPass from '../pages/FormRecovPass'

export const Route = createFileRoute('/recoverPass')({
  component: FormRecovPass,
})