'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../ui/Button'
import UserAccountNav from './UserAccountNav';

export default function SignButton() {
  const { data: session } = useSession();
  return (
    <div>
        {session !== null ? (
        <UserAccountNav/>
      ) : (
            <Link href="sign-up">
              <Button>Sign Up</Button>
            </Link>
      )}</div>
  )
}