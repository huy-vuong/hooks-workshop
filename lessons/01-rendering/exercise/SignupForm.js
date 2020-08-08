import React, { Fragment, useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { signup } from "app/utils"
// import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"
// import SignupForm from "./SignupForm.final"
// export default SignupForm

function TabsButton({ children }) {
  return <button className="TabsButton icon_button cta">{children}</button>
}

function TextInput({ id, label, type = "text" }) {
  return <input type={type} id={id} placeholder={label} />
}

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <TextInput id="display-name" label="Display Name" />
      <TextInput id="photo-url" label="Photo URL" />
      <TextInput id="email" label="Email" />
      <TextInput id="password" label="Password" type="password" />
      <DateFields defaultValue={new Date()}>
        <MonthField />
        <DayField />
        <YearField start={2007} end={2020} />
      </DateFields>
      <TabsButton>
        <FaDumbbell />
        <span>&nbsp;</span>
        Submit
      </TabsButton>
    </form>
  )
}
