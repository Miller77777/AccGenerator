<?xml version="1.0" encoding="utf-8"?>
<CheatTable CheatEngineTableVersion="26">
  <CheatEntries>
    <CheatEntry>
      <ID>0</ID>
      <Description>"BanbyPass"</Description>
      <LastState Activated="1" RealAddress="13FB8E190"/>
      <VariableType>String</VariableType>
      <Length>21</Length>
      <Unicode>0</Unicode>
      <CodePage>0</CodePage>
      <ZeroTerminate>1</ZeroTerminate>
      <Address>Growtopia.exe+27E190</Address>
    </CheatEntry>
    <CheatEntry>
      <ID>1</ID>
      <Description>"Fast Punch"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1AE8C3 ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.jmp 13F8D0000

exit:
jmp returnhere

Growtopia.exe+1AE8C3 :
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1AE8C3 :
jmp 13F8D0000
//Alt: db E9 38 17 E1 FF
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>2</ID>
      <Description>"Fast Fall"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1F914E ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.jne Growtopia.exe+1F915A
cmp byte ptr [rsp+000000F0],00

exit:
jmp returnhere

Growtopia.exe+1F914E :
jmp newmem
nop
nop
nop
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1F914E :
jne Growtopia.exe+1F915A
cmp byte ptr [rsp+000000F0],00
//Alt: db 75 0A 80 BC 24 F0 00 00 00 00
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>3</ID>
      <Description>"Float"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1BA6DA ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.je Growtopia.exe+1BA715
mov [rsi],rax

exit:
jmp returnhere

Growtopia.exe+1BA6DA :
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1BA6DA :
je Growtopia.exe+1BA715
mov [rsi],rax
//Alt: db 74 39 48 89 06
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>4</ID>
      <Description>"Anti Respawn v1"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+299358 ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.outsb 
push rbx
je Growtopia.exe+2993AE

exit:
jmp returnhere

Growtopia.exe+299358 :
jmp newmem
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+299358 :
outsb 
push rbx
je Growtopia.exe+2993AE
//Alt: db 4F 6E 53 65 74 50
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>5</ID>
      <Description>"Fast Punch"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1AE8C3 ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.jmp 13F8D0000

exit:
jmp returnhere

Growtopia.exe+1AE8C3 :
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1AE8C3 :
jmp 13F8D0000
//Alt: db E9 38 17 E1 FF
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>6</ID>
      <Description>"Teleport"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+2229B7) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
je Growtopia.exe+222A01
test r8d,r8d

exit:
jmp returnhere

Growtopia.exe+2229B7:
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+2229B7:
je Growtopia.exe+222A01
test r8d,r8d
//Alt: db 74 48 45 85 C0
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>7</ID>
      <Description>"Goblin Punch"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+A7A6A ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
jmp 13F8F0000

exit:
jmp returnhere

Growtopia.exe+A7A6A :
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+A7A6A :
jmp 13F8F0000
//Alt: db E9 91 85 F3 FF
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>8</ID>
      <Description>"Night Vision"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1E81C7) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.je Growtopia.exe+1E8217
mov eax,00000DF8

exit:
jmp returnhere

Growtopia.exe+1E81C7:
jmp newmem
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1E81C7:
je Growtopia.exe+1E8217
mov eax,00000DF8
//Alt: db 74 4E B8 F8 0D 00 00
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>9</ID>
      <Description>"Long Place"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+D89B3) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.add eax,02
movd xmm0,eax

exit:
jmp returnhere

Growtopia.exe+D89B3:
jmp newmem
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+D89B3:
add eax,02
movd xmm0,eax
//Alt: db 83 C0 02 66 0F 6E C0
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>10</ID>
      <Description>"Growsz SPEED"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1AAED0) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.subss xmm2,xmm1
addss xmm9,xmm2

exit:
jmp returnhere

Growtopia.exe+1AAED0:
jmp newmem
nop
nop
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1AAED0:
subss xmm2,xmm1
addss xmm9,xmm2
//Alt: db F3 0F 5C D1 F3 44 0F 58 CA
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>11</ID>
      <Description>"Move While Dead"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+2878A8 ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.outsb 
je Growtopia.exe+287911
jb Growtopia.exe+28791C

exit:
jmp returnhere

Growtopia.exe+2878A8 :
jmp newmem
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+2878A8 :
outsb 
je Growtopia.exe+287911
jb Growtopia.exe+28791C
//Alt: db 49 6E 74 65 72 6E
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>12</ID>
      <Description>"Tractor Mode"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1B1DF2) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.je Growtopia.exe+1B1E02
mov ecx,000007AE

exit:
jmp returnhere

Growtopia.exe+1B1DF2:
jmp newmem
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1B1DF2:
je Growtopia.exe+1B1E02
mov ecx,000007AE
//Alt: db 74 0E B9 AE 07 00 00
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>13</ID>
      <Description>"Auto Jump v2"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1ABEE0 ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.mulss xmm0,xmm8

exit:
jmp returnhere

Growtopia.exe+1ABEE0 :
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1ABEE0 :
mulss xmm0,xmm8
//Alt: db F3 41 0F 59 C0
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>14</ID>
      <Description>"I FORGOT BUT RANDOM"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+9E12A ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.movss [rcx],xmm2
movaps xmm2,xmm7

exit:
jmp returnhere

Growtopia.exe+9E12A :
jmp newmem
nop
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+9E12A :
movss [rcx],xmm2
movaps xmm2,xmm7
//Alt: db F3 0F 11 11 0F 28 D7
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>15</ID>
      <Description>"Frog Mode"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1A9DFB ) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.je Growtopia.exe+1A9EFC

exit:
jmp returnhere

Growtopia.exe+1A9DFB :
jmp newmem
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1A9DFB :
je Growtopia.exe+1A9EFC
//Alt: db 0F 84 FB 00 00 00
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>16</ID>
      <Description>"Mod Spawn"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+28719C) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.jo Growtopia.exe+28720D
jae Growtopia.exe+2871F8
pop rcx

exit:
jmp returnhere

Growtopia.exe+28719C:
jmp newmem
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+28719C:
jo Growtopia.exe+28720D
jae Growtopia.exe+2871F8
pop rcx
//Alt: db 70 6F 73 58 59
</AssemblerScript>
    </CheatEntry>
    <CheatEntry>
      <ID>17</ID>
      <Description>"Anti Ice / Ice Mode"</Description>
      <LastState/>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
//code from here to '[DISABLE]' will be used to enable the cheat
alloc(newmem,2048,Growtopia.exe+1AC552) 
label(returnhere)
label(originalcode)
label(exit)

newmem: //this is allocated memory, you have read,write,execute access
//place your code here

originalcode:
//.je Growtopia.exe+1AC575
mov rax,[rbp+27]

exit:
jmp returnhere

Growtopia.exe+1AC552:
jmp newmem
nop
returnhere:


 
 
[DISABLE]
//code from here till the end of the code will be used to disable the cheat
dealloc(newmem)
Growtopia.exe+1AC552:
je Growtopia.exe+1AC575
mov rax,[rbp+27]
//Alt: db 74 21 48 8B 45 27
</AssemblerScript>
    </CheatEntry>
  </CheatEntries>
  <CheatCodes>
    <CodeEntry>
      <Description>Change of jne Growtopia.exe+1361EA</Description>
      <Address>13F9361A0</Address>
      <ModuleName>Growtopia.exe</ModuleName>
      <ModuleNameOffset>1361A0</ModuleNameOffset>
      <Before>
        <Byte>D8</Byte>
        <Byte>4E</Byte>
        <Byte>1E</Byte>
        <Byte>00</Byte>
        <Byte>00</Byte>
      </Before>
      <Actual>
        <Byte>75</Byte>
        <Byte>48</Byte>
      </Actual>
      <After>
        <Byte>48</Byte>
        <Byte>8B</Byte>
        <Byte>83</Byte>
        <Byte>38</Byte>
        <Byte>01</Byte>
      </After>
    </CodeEntry>
  </CheatCodes>
  <UserdefinedSymbols/>
</CheatTable>
