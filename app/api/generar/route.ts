import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
      const datos = await request.json();
          const { tipo, complejidad } = datos;

              // --- CÁLCULO MATEMÁTICO DEL SAI ---
                  // Usaremos la variable "complejidad" (que viene del slider, de 1 a 100)
                      
                          let pesoEstructural = 60; // W_i: Un valor base de peso
                              let factorValidacion = complejidad / 100; // V_i: Convertimos tu slider en un porcentaje
                                  let penalizacionFallas = 5; // Delta_f: Pequeña penalización base
                                      
                                          // Aplicamos la fórmula matemática en código JavaScript
                                              let calculoMatematico = (pesoEstructural + (complejidad * factorValidacion)) - penalizacionFallas;
                                                  
                                                      // Usamos Math.round() para redondear el número y no tener decimales infinitos
                                                          let saiFinal = Math.round(calculoMatematico);

                                                              // Regla de seguridad: El SAI no puede ser mayor a 100
                                                                  if (saiFinal > 100) {
                                                                        saiFinal = 100;
                                                                            }

                                                                                // --- RESPUESTA DEL SERVIDOR ---
                                                                                    const resultadoSimulado = {
                                                                                          mensaje: "¡Éxito! Conexión segura establecida con el motor STV.",
                                                                                                urlImagenFalsa: `https://servidor-stv.com/render-${tipo}-8k.jpg`,
                                                                                                      saiCalculado: saiFinal // Ahora enviamos el número real calculado
                                                                                                          };

                                                                                                              return NextResponse.json(resultadoSimulado);

                                                                                                                } catch (error) {
                                                                                                                    return NextResponse.json({ error: 'Hubo un problema al procesar la solicitud' }, { status: 500 });
                                                                                                                      }
                                                                                                                      }