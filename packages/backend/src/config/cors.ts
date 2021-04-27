const allowedOrigins: string[] = ['http://127.0.0.1:8080']

export const corsOptions = {
  credentials: true,

  origin: (origin: any, callback: any) => {
    if (!origin || allowedOrigins?.includes(origin)) return callback(null, true)

    return callback(new Error('AccessDenied'), false)
  },
}
