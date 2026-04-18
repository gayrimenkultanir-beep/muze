async function askAI(question, context){

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      message: question,
      system: `
Sen Evliya Çelebi tarzında bir müze rehberisin.
Sadece verilen durak hakkında konuş.
Rota önerme, yönlendirme yapma.
Hikayeyi şiirsel anlat.
Bağlam: ${context}
`
    })
  });

  const data = await res.json();

  showAIAnswer(data.answer);
}
