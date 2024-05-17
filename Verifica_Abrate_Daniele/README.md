# Verifica di TPSIT sugli array e oggetti 
## Addestratore del riconoscitore di frutta e verdura
L'obiettivo del sito web è quello di imparare dagli utenti a classificare la frutta e la verdura e poi a verificare se i nuovi utenti associano le emoji in modo corretto.

# ISTRUZIONI
1. Associare al bottone con scritto "Addestra" una funzione che in base al contenuto del bottone stesso quando premuto vada a scrivere come testo del bottone "Addestra" o "Verifica"

2. Quando si clicca il bottone "Avvia" bisogna far partire un timer che ogni 3 secondi estragga a sorte una emoji dall'array emoji fornito, la rappresenti al posto dell'attuale emoji già visualizzata e associ alla prima sezione la classe "animazione"

4. Definire due array: Frutta e Verdura vuoti.

5. Associare alle due immagini AI LATI due funzioni che in base al contenuto del primo bottone calcolino il punteggio (vedi i punti successivi) e tolgano la classe  "animazione".

6. Se il primo bottone ha come contenuto "Addestra" in base alle immagini cliccate inserire nel vettore Frutta o Verdura l'emoji (In questa fase non si calcolano punteggi!)

7. Se il primo bottone  ha come contenuto "Verifica" in base alle immagini cliccate verificare se l'emoji è contenuta in Frutta o Verdura e se l'associazione è corretta aggiungere un punto all'immagine giusta.

8. Se l'utente non clicca in tempo le due immagini e l'emoji finisce nel cestino, passati i 3 secondi è necessario: aggiungere un punto negativo sotto il cestino, togliere la classe "animazione" e far aspettare all'utente altri 3 secondi prima di visualizzare una nuova emoji

9. Quando si sono finite le emoji da visualizzare indicare i putni finali facendo la somma dei punti sotto ogni immagine.

10. PER AVERE IL 10 utilizzare invece del vettore emoji, quello chiamato Alimenti inserendo come suggerimento sull'emoji il nome dell'alimento (campo desc).

# Per chi ha diritto al tempo aggiuntivo
E' esonerato dalla gestione del punto 8, 9 e 10.