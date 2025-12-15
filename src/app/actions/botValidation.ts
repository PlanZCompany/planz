'use server'

export async function botValidate(captcha: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTHA_SECRET_KEY}&response=${captcha}`,
    })

    const captchaResponse = await response.json()

    if (!captchaResponse.success) {
      return {
        data: 'error',
      }
    }

    return {
      data: 'success',
    }
  } catch (error) {
    console.error(error)
    return {
      data: 'error',
    }
  }
}
