export const fileToBase64 = (
  file: File
): Promise<string | ArrayBuffer | null> => {
  const fr = new FileReader()
  return new Promise((res, rej) => {
    fr.onloadend = (): void => res(fr.result)
    fr.onerror = rej
    fr.readAsDataURL(file)
  })
}
