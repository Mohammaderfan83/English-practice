window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });

  const contentData = {
    1: {
      title: "Topic1: Men are just as interested in shopping for clothes as women.",
      circles: [
        "No",
        "1.men buy more for need <br><br> 2.shopping is a hobby for women",
        "1.comparison of women's and men's stores",
        "Women go shopping more than men. "
      ]
    },
    2: {
      title: "Topic2: These days,nobody is prepared to suffer in order to look good. The most important thing is comfort.",
      circles: ["No"
      , "1.beauty is more important for both gender <br>2.Human beings naturally love beauty."
      , "1.High heel shoes <br> 2.Hard piercing <br>3.major surgery <br> 4.tattoo"
      , "People pay more attention to beauty than comfort."]
    },
    3: {
      title: "Topic3: You can tell a lot about someone's personality from the clothes they wear.",
      circles: ["No"
      , "1.Everything isn't appearance <br> 2.in today's world most people follow fashion "
      , "1.The poor <br> 2.The ordinary <br> 3.The rich"
      , "Fashion choices can't reveal aspects of a person’s character"]
    },
    4: {
      title: "Topic4: Cheap fashion means exploiting people in less developed countries.",
      circles: ["Yes"
      , "1.Use cheap worker <br> 2.setting up factories in poor countries"
      , "1.india <br> 2.vietnam <br> 3.Rich countries like USA"
      , "Low prices often come at a high human cost."]
    }
  };

  function showSubject(num) {
      const subject = contentData[num];
      const container = document.getElementById("subject-area");

      container.innerHTML = `
          <div class="topic-box">${subject.title}</div>
          <button class="btn btn-primary show-btn attention" onclick="toggleMindmap(${num}, this)">Show</button>
          <div class="mindmap" id="mindmap-${num}">
          ${subject.circles.map((text, index) => `
              ${index > 0 ? '<div class="arrow"></div>' : ''}
              <div class="box">${text}</div>
          `).join('')}
          </div>
      `;
  }


  function toggleMindmap(num, button) {
      const mindmap = document.getElementById(`mindmap-${num}`);
      mindmap.classList.toggle("show");

      if (mindmap.classList.contains("show")) {
          button.textContent = "Hidden";
          button.classList.remove("attention"); 
      } else {
          button.textContent = "Show";
          button.classList.add("attention"); 
      }

      if (mindmap.classList.contains("show")) {
          setTimeout(() => {
          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });
          }, 500);
      }
  }


  const darkModeToggle = document.getElementById('darkModeToggle');
  const iconSun = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');

  function setDarkMode(enabled) {
    if(enabled) {
      document.body.classList.add('dark-mode');
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
      darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
      darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if(darkModeSetting === 'enabled') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    showSubject(1);
  });

  darkModeToggle.addEventListener('click', () => {
    const enabled = document.body.classList.contains('dark-mode');
    setDarkMode(!enabled);
  });