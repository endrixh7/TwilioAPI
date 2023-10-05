- Before we start make sure that you have VS Code installed and NodeJS
- If you dont, please follow the official documentations on VS Code and NODE JS websites
- First Create a folder 'TwilioAPI'
- Open that folder
- Hold down 'Left Shift' and 'Right Click' with your mouse anywhere and click 'Open with Code(VS Code)'
This method is for Windows 11, because the 'mouse menu' has changed in Windows 11.
On Windows 10 you will see 'Open with Code' by pressing only the 'Right Click' of your mouse.

- Now go to Terminal, commands are the same on Powershell, CMD or Bash.
- Start type : $ npm init -y
- Next command, type : $ git init
- Dont forget to add '.gitignore' file, lets add together.
- The command for gitignore : $ touch .gitignore
- Open the .gitignore and add line by line
"node_modules"
".env"
These files will be ignored during the git push command, will not be published on Github.

- Now lets start using TwilioAPI to send SMS
- Sign up for Twilio if you dont have one.
- Go to dashboard and look for Account Sid, Auth Token and My Twilio phone number.


