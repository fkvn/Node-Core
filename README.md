# Nodejs Fundamental 
 
### Node and npm Installation 

First, go to https://nodejs.org/en/download/ and download an appropriate installer for your OS by clicking on the Install button.

The installers come with Node package manager (npm). Therefore, you don't need to install npm separately. 

For other ways to install Node and npm, such as brew or nvm, please read further information in other internet resources to get the correct instruction.

### Configuring npm

Locate the path of your npm's directory by running command **npm config get prefix**. The result should be **/usr/local**. If your result is different, it means you've installed node and npm uncorrectly. As a result, you must either remove your node and npm as the next section describe or you need to change the default folder to a new one as described in the npm documentation.

Then, you have to set permission of your npm's directory to the current user by running the command **sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}**.

To test your configuration, try to install node-static package by command **npm i -g node-static**. Then run **static .**, if the terminal doesn't show "the command not found", it means you've installed it correcly.

### Troubleshooting 

When you try to install npm global or other modules, we might get a permission error somewhere. Here are the instructions how to fix the problems.

1. First, if you are confusing about your node installation directories because you have so many node and node_modules folders, you have to remove all of them. Try the following steps: 

   If you used homebrew to install node -> run this command: **brew uninstall node**. After that, you check to see if node is uninstalled from your computer or not by running **node -v** and **npm -v**. If it still shows the version of either of them, which means that your node was completely installed somewhere else. Now, we have to do more extra steps:
  
   * Go to **/usr/local/lib** and delete any node and node_modules
   * Go to **/usr/local/include** and delete any node and node_modules directory
   * Check your **Home directory for any local or lib or include folders**, and delete any node or node_modules from there
   * Go to **/usr/local/bin** and delete any node executable
   
  Next, run 2 commands **node -v** and **npm -v** again to make sure that node and npm are completely removed from your disk.
  
2. After you successful removed all node and npm related files, you then install by following step from [Node and npm installation](#Node-and-npm-Installation) and [Configuring npm](###Configuring-npm).
