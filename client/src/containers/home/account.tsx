"use client"

import { useState } from "react"
import LoginModal from "@/containers/login/loginModal"

export default function Account() {
  const [loginModalOpened, setLoginModalOpened] = useState(false)

  return (
    <div className="flex flex-wrap grow justify-end items-center min-w-[20%] h-min">
      <div className="flex items-center justify-center mr-9 my-1 bg-main-theme text-white rounded hover:cursor-pointer">
        <p className="text-sm mx-2.5 my-2 text-center" onClick={() => setLoginModalOpened(true)}>
          로그인
        </p>
      </div>
      <div className="flex items-center justify-center mr-9 my-1 bg-main-theme text-white rounded hover:cursor-pointer">
        <p className="text-sm mx-2.5 my-2 text-center">회원가입</p>
      </div>
      {loginModalOpened ? <LoginModal onClickClose={() => setLoginModalOpened(false)} /> : null}
    </div>
  )
}
