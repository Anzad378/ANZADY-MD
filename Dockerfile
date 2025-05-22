FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Anzad378/ANZADY-MD/root/Anzad378

WORKDIR /root/lazack/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
