export default function guardrail(mathFunction) {
  const queue = [];
  const strings = 'Guardrail was processed';

  try {
    const result = mathFunction();
    queue.push(result, strings);
  } catch (error) {
    queue.push(`Error: ${error.message}`, strings);
  }

  return queue;
}
