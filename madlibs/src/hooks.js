import { useCallback, useState } from "react";

/**
 * @template T
 * @param {T} defaultFields
 */
export function useForm(defaultFields = {}) {
  /**
   * @type {[T, React.Dispatch<React.SetStateAction<T>>]}
   */
  const [data, setData] = useState(defaultFields)
  const register = useCallback(
    /**
     * 
     * @param {keyof T} fieldName 
     * @returns 
     */
    (fieldName) => {
    return {
      value: data[fieldName],
      onChange: e => setData({ ...data, [fieldName]: e.target.value })
    }
  }, [data])
  const reset = useCallback(() => {
    setData({...defaultFields})
  }, [defaultFields])
  return {register, state: data, reset}
}