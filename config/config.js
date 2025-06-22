const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongoDbConnectionUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,

  horoscopes: {
    Capricorn: {
      start: "12-22",
      end: "01-19",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Aquarius: {
      start: "01-20",
      end: "02-18",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Pisces: {
      start: "02-19",
      end: "03-20",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Aries: {
      start: "03-21",
      end: "04-19",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Taurus: {
      start: "04-20",
      end: "05-20",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Gemini: {
      start: "05-21",
      end: "06-20",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Cancer: {
      start: "06-21",
      end: "07-22",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Leo: {
      start: "07-23",
      end: "08-22",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Virgo: {
      start: "08-23",
      end: "09-22",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Libra: {
      start: "09-23",
      end: "10-22",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Scorpio: {
      start: "10-23",
      end: "11-21",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    },
    Sagittarius: {
      start: "11-22",
      end: "12-21",
      text: [
        "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
        "New ideas are flowing—embrace them. A spontaneous connection may surprise you.",
        "Emotions run high, but your intuition will guide you. Take time for self-reflection.",
        "Energy is on your side today—take action on something you've been putting off.",
        "Patience brings rewards. Financial opportunities may come from an unexpected source.",
        "Communication is key. Reach out to an old friend or clear up a misunderstanding.",
        "Your nurturing nature will be appreciated today. Focus on home and relationships.",
        "Confidence will open new doors. Showcase your talents and don't be afraid to lead.",
        "Stay organized, and you’ll breeze through your tasks. A detail could make all the difference.",
        "Balance is your strength. Today, a thoughtful compromise could bring unexpected harmony.",
        "You’re driven to uncover truths. Trust your instincts, but be gentle in your approach.",
        "Adventure awaits. Be bold in trying something new—it may lead to exciting outcomes."
      ]
    }
  }
}