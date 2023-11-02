import subprocess
    
def run_wmap(process,targetURL):
    commands = f'msfconsole\n load wmap\n wmap_sites -a {targetURL}\n wmap_targets -t {targetURL}\n wmap_run -e\n wmap_vulns -l\n'
    stdout, stderr = process.communicate(commands)
    print("Output:\n", stdout)
        
process = subprocess.Popen('/bin/bash', stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
run_wmap(process, "http://localhost/DVWA/index.php")
