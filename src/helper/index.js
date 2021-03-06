
export function Err (res) {
  return (error) => {

    let message = ''

    if(error.constructor === Array){
        message = error[0].message
    }else{
        message = error.message
    }

    const data = {
      message: message
    }

    res.status(400).json(data)
  }
}

export function NotFound (res) {
  return (message) => {
    const data = {
      error: message + " not found."
    }
    res.status(404).json(data)
  }
}

export function Ok (res) {
  return (body) => {
    const data = {
      data: body
    }
    res.status(200).json(data)
  }
}

export function OkCreated (res) {
  return (body) => {
    const data = {
      data: body
    }
    res.status(201).json(data)
  }
}

export function EmptyOk (res) {
  return (body) => {
    res.status(204).json()
  }
}
