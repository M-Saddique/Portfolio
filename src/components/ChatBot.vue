<template>
  <div class="chatbot-container">
    <!-- Floating Chatbot Icon -->
    <div class="chatbot-icon" @click="toggleChat" :class="{ active: isOpen }">
      <div class="pulse-effect"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#ffffff"
        width="24"
        height="24"
      >
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        />
      </svg>
    </div>

    <!-- Chat Window -->
    <div class="chatbot-window" :class="{ active: isOpen }">
      <!-- Header -->
      <div class="chatbot-header">
        <h3 class="text-white">Chat with Saddique's AI</h3>
        <span> Ask me anything about Saddique's experience and skills </span>
        <div class="typing-indicator" v-if="isTyping">
          <span></span><span></span><span></span>
        </div>
      </div>

      <!-- Messages -->
      <div class="chat-messages" ref="messagesContainer">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="`message ${msg.sender}`"
        >
          <div class="message-content">{{ msg.text }}</div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="chat-input">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Ask about my skills..."
          :disabled="isTyping"
        />
        <button @click="sendMessage" :disabled="!userInput || isTyping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            width="20"
            height="20"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, nextTick } from "vue";

// State
const isOpen = ref(false);
const isTyping = ref(false);
const userInput = ref("");
const messagesContainer = ref(null);
const messages = ref([
  {
    text: "Hello! I can tell you about my developer's skills, experience, and projects. What would you like to know?",
    sender: "bot",
  },
]);

const portfolioData = {
  skills: [
    "Vue.js",
    "Nuxt.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Rest api",
    "Docker",
    "Git",
  ],
  experience: [
    {
      company: "Seven Eight Six Media Group",
      role: "Senior Frontend Developer",
      duration: "2024-Present",
      description:
        "Worked on building and enhancing responsive web interfaces with Vue.js and Tailwind CSS. Assisted in implementing reusable components, optimizing performance, and ensuring a consistent user experience across devices.",
    },
    {
      company: "Brainstormer Technologies",
      role: "Frontend Developer",
      duration: "2022-2024",
      description: " Developed Vue.js applications with state management and REST API integration.",
    },
    {
      company: "Petsaal Technologies",
      role: "Associate Frontend Developer",
      duration: "2021-2022",
      description:
        "Built responsive websites and implemented UI/UX designs.",
    },
  ],
  projects: [
    {
      name: "Platform Wise Compass,",
      url: "https://platform.wisecompass.com",
    },
    {
      name: "Dlivrd,",
      url: "https://expedite.dlivrd.io",
    },
    {
      name: "Platform GlassHub,",
      url: "https://platform.glasshub.ai",
    },
    {
      name: "Platform British Lyceum,",
      url: "https://britishlyceum.co.uk",
    },
    {
      name: "Admin Dashboard,",
      url: "https://admin.britishlyceum.com",
    },
  ],
};

// Methods
const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

const scrollToBottom = () => {
  nextTick(() => {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  });
};

const getPredefinedResponse = (question) => {
  if (question.includes("skill") || question.includes("what can you do")) {
    return `My technical skills include: ${portfolioData.skills.join(
      ", "
    )}. I'm particularly experienced with ${portfolioData.skills[0]} and ${
      portfolioData.skills[1]
    }.`;
  }

  if (question.includes("experience") || question.includes("worked")) {
    return portfolioData.experience
      .map(
        (exp) =>
          `At ${exp.company} (${exp.duration}) as ${exp.role}: ${exp.description}`
      )
      .join("\n\n");
  }

  if (question.includes("project") || question.includes("built")) {
    return portfolioData.projects
      .map(
        (proj) =>
          `Project: ${proj.name}
          \nURL: ${proj.url}
           `
      )
      .join("\n\n");
  }

  if (question.includes("hello") || question.includes("hi")) {
    return "Hi there! Ask me anything about my professional background.";
  }
  if (question.includes("email") || question.includes("contact")) {
    return "Please email me if you have any query, Email: Saddique681@gmail.com";
  }
  return null;
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  // Add user message
  messages.value.push({
    text: userInput.value,
    sender: "user",
  });

  const userQuestion = userInput.value.toLowerCase();
  userInput.value = "";
  isTyping.value = true;

  scrollToBottom();

  // Simulate typing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check for predefined responses
  let response = getPredefinedResponse(userQuestion);

  // If no predefined response, use default
  if (!response) {
    response =
      "I can tell you about my skills, experience, or projects. Try asking something like 'What skills do you have?' or 'Tell me about your experience'.";
  }

  messages.value.push({
    text: response,
    sender: "bot",
  });

  isTyping.value = false;
  scrollToBottom();
};
</script>
<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

/* Floating Icon */
.chatbot-icon {
  position: relative;
  width: 60px;
  height: 60px;
  background: #6e45e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(110, 69, 226, 0.5);
  transition: all 0.3s ease;
  z-index: 1001;
}

.chatbot-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(110, 69, 226, 0.7);
}

.chatbot-icon.active {
  transform: rotate(360deg) scale(1.1);
  background: #88d3ce;
}

.pulse-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(110, 69, 226, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}

/* Chat Window */
.chatbot-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 420px;
  max-width: 90vw;
  height: 500px;
  max-height: 70vh;
  background: #0f0f13;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border: 1px solid #2a2a3a;
  z-index: 1000;
}

.chatbot-window.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

/* Header */
.chatbot-header {
  background: #1a1a24;
  padding: 15px;
  /* display: flex;
  justify-content: space-between; */
  align-items: center;
  border-bottom: 1px solid #2a2a3a;
}

.chatbot-header h3 {
  margin: 0;
  color: #ffffff;
  font-size: 1.1rem;
}

.typing-indicator span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #88d3ce;
  border-radius: 50%;
  margin: 0 2px;
  animation: bounce 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

/* Messages */
.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: #0f0f13;
}

.message {
  margin-bottom: 15px;
  display: flex;
  animation: fadeIn 0.3s ease;
}

.message.user {
  justify-content: flex-end;
}

.message.bot {
  justify-content: flex-start;
}

.message-content {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 18px;
  line-height: 1.4;
  position: relative;
  word-wrap: break-word;
}

.bot .message-content {
  background: #1a1a24;
  border-bottom-left-radius: 5px;
  color: #ffffff;
}

.user .message-content {
  background: #6e45e2;
  border-bottom-right-radius: 5px;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input Area */
.chat-input {
  padding: 15px;
  background: #1a1a24;
  border-top: 1px solid #2a2a3a;
  display: flex;
  align-items: center;
}

.chat-input input {
  flex: 1;
  background: #0f0f13;
  border: 1px solid #2a2a3a;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;
  outline: none;
  transition: border 0.3s;
}

.chat-input input:focus {
  border-color: #6e45e2;
}

.chat-input button {
  background: #6e45e2;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-input button:hover:not(:disabled) {
  background: #7d55f0;
  transform: scale(1.05);
}

.chat-input button:disabled {
  background: #2a2a3a;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 480px) {
  .chatbot-container {
    bottom: 15px;
    right: 15px;
  }

  .chatbot-window {
    right: 15px;
    width: calc(100vw - 30px);
    height: 60vh;
  }
}
/* Custom scrollbar for chat messages */
.chat-messages {
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 #1a1a24;
}

/* For WebKit browsers (Chrome, Safari) */
.chat-messages::-webkit-scrollbar {
  width: 8px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #1a1a24;
  border-radius: 4px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  border-radius: 4px;
  border: 2px solid #1a1a24;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background-color: #2563eb;
}
</style>
  