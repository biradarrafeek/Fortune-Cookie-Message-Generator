  const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "Your creativity will lead to great success.",
            "Good things come to those who wait, but better things come to those who hustle.",
            "The greatest risk is not taking one.",
            "You will receive a pleasant surprise soon.",
            "Your hard work is about to pay off.",
            "Adventure awaits you around the corner.",
            "Today is a lucky day for you!",
            "A dream you have will soon come true.",
            "Kindness is the language the deaf can hear and the blind can see."
        ];

        function generateFortune() {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            document.getElementById("fortuneText").textContent = fortunes[randomIndex];
        }
