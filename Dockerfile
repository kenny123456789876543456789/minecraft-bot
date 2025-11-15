# Use official Node 18 Debian image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies (works without lockfile)
RUN npm install


# Copy the rest of the code
COPY . .

# Expose Railway port
ENV PORT=3000
EXPOSE 3000

# Start the bot
CMD ["node", "index.js"]
