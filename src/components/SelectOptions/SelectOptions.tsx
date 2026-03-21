import { useState } from "react"
import { Container, SelectBox, Dropdown, Option } from "./styles"


type OptionType = {
  label: string
  value: string
}

type Props = {
  options: OptionType[]
  value: string
  onChange: (value: string) => void
}

export function CustomSelect({ options, value, onChange }: Props) {

  const [open, setOpen] = useState(false)

  const selected = options.find(opt => opt.value === value)

  return (
    <Container>

      <SelectBox onClick={() => setOpen(!open)}>
        {selected ? selected.label : "Selecione uma opção"}
        <span>▼</span>
      </SelectBox>

      {open && (
        <Dropdown>

          {options.map(option => (
            <Option
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              {option.label}
            </Option>
          ))}

        </Dropdown>
      )}

    </Container>
  )
}