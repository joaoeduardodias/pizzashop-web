import { api } from '@/lib/axios'

export interface signInBody {
  email: string
}

export async function signIn({ email }: signInBody) {
  await api.post('/authenticate', { email })
}
