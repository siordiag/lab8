import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://jvkcuvoglywtwxeravsz.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2a2N1dm9nbHl3dHd4ZXJhdnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NzUzMzEsImV4cCI6MjA1NzM1MTMzMX0.ixdTM_6i3QzGUg7ovrE5aTAigrLAXHV6d6GUBmR2L5U'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  let bookList = document.getElementById('books');
  
  for (let book of books) {
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
   }
}

getBooks();