// Demo app list and interaction
const apps = [
  {rank:1,title:'New Yono App',bonus:'Bonus Upto ₹1500',min:'Min. Withdraw ₹100',url:'https://example.com/app1'},
  {rank:2,title:'Teen Patti Master',bonus:'Sign Up Bonus ₹30',min:'Min. Withdraw ₹100',url:'https://example.com/teenpatti'},
  {rank:3,title:'Teen Patti Dhan',bonus:'Sign Up Bonus ₹120',min:'Min. Withdraw ₹100',url:'https://example.com/teenpattidhan'},
  {rank:4,title:'Good Slots',bonus:'Sign Up Bonus ₹49',min:'Min. Withdraw ₹110',url:'https://example.com/goodslots'},
  {rank:5,title:'BET 51',bonus:'Sign Up Bonus ₹55',min:'Min. Withdraw ₹100',url:'https://example.com/bet51'},
  {rank:6,title:'Mqm Bet',bonus:'Sign Up Bonus ₹44',min:'Min. Withdraw ₹100',url:'https://example.com/mqmbet'}
];

const listEl = document.getElementById('appsList');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

function renderApps(data){
  if(!listEl) return;
  listEl.innerHTML='';
  data.forEach(a=>{
    const div=document.createElement('div');
    div.className='item';
    div.innerHTML = `<div><strong>${a.rank}. ${a.title}</strong><div style="font-size:13px;color:#666">${a.bonus} • ${a.min}</div></div><div><button class="btn" onclick="openApp('${a.url}')">Download</button></div>`;
    listEl.appendChild(div);
  });
}

function openApp(url){ window.open(url,'_blank','noopener'); }

function filterApps(){
  if(!searchInput) return;
  const term = searchInput.value.toLowerCase();
  const filtered = apps.filter(a=>a.title.toLowerCase().includes(term));
  renderApps(filtered);
  if(clearBtn) clearBtn.classList.toggle('hidden', term.length===0);
}

function clearSearch(){ if(searchInput){ searchInput.value=''; filterApps(); searchInput.focus(); } }

function handleContact(e){
  e.preventDefault();
  const name=document.getElementById('cname').value;
  const email=document.getElementById('cemail').value;
  const message=document.getElementById('cmessage').value;
  const res=document.getElementById('contactResult');
  if(res) res.textContent='તમારો સંદેશ સફળતાપૂર્વક મોકલાવ્યો!';
  e.target.reset();
}

// initial render (wait for DOM)
document.addEventListener('DOMContentLoaded', ()=>{ renderApps(apps); if(searchInput) searchInput.addEventListener('input', filterApps); });