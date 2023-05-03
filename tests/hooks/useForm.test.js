import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../src/hooks"

const initialForm = {
  name: "Luciano",
  email: "luc@email.com",
}

describe('useForm', () => {
  it("should return default values", () => {
    const initialForm = {
      name: "Luciano",
      email: "luc@email.com",
    }

    const { result } = renderHook(() => useForm(initialForm))


    expect(result.current).toEqual({
      email: initialForm.email,
      name: initialForm.name,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  it('should change the form name property', () => {
    const newValue = 'John'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  it('should reset the form values', () => {
    const newValue = 'John'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})