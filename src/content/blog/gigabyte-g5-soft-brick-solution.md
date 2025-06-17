---
title: 'How to Gigabyte G5 MF Soft Brick Solution'
description: 'Solution to the soft brick caused by Windows 11 Update that damages the BIOS.'
pubDate: 'Jun 17 2025'
heroImage: '/hero_gigabyte.png'
---

After a June 11 Windows 11 update, my GIGABYTE G5 MF laptop suddenly wouldn’t boot. Cannot boot from USB drives also, seems BIOS was damaged.
(Check this [Reddit Post](https://www.reddit.com/r/gigabyte/comments/1ladf27/gigabyte_g5_kf5_stuck_on_startup_screen/)).
Fortunately, it was a **soft brick**, and after some deep digging and trial-and-error, I recovered it **completely using only the official BIOS, EFI Shell, and a USB drive.**

Here’s how I did it — and how _you_ can, too.

## ⚠️ Disclaimer

This guide is provided for educational purposes only. I do not take any responsibility for damage, data loss, or device malfunction resulting from the use or misuse of the information provided here. Proceed at your own risk.

Make sure to follow all instructions carefully and only apply them to your exact hardware model. If you are unsure at any step, seek professional assistance.

---

## 🛠️ What You'll Need

- Any working computer (Windows preferably) to prepare a USB drive
- A FAT32-formatted USB stick (≥4GB & <= 16GB)
- Disable Secure Boot
- Official BIOS for your GIGABYTE model (I use latest [FB10 version](https://download.gigabyte.com/FileList/BIOS/nb-bios-g5_g7-vf-win11-64bit-ddr4-bios-fb10.zip?v=c68d2fb2824a3f2e627da57c46ad0e16) for Gigabyte G5 MF)
- An internet connection (for download)

---

## ✅ Step 1: Download the official BIOS from GIGABYTE

1. Go to [https://www.gigabyte.com/es/Laptop/G5--2023/support#dl](https://www.gigabyte.com/es/Laptop/G5--2023/support#dl) and find your exact model — in my case, **G5 MF**
2. Download the latest BIOS `.zip`. In my case is a aprox 20mb size file.

![BIOS Download!](/gigabyte/gigabyte_bios_versions.PNG)

3. Inside, you should find several files like

- NP50RNx-Y(32M).10 ← full BIOS + ME image
- NP50RNx-Y10.efi ← EFI BIOS flasher
- FlashMe.nsh ← script for automated flashing
- NP50RNx-Y10.exe ← (Windows version – not needed)
- tools, etc.

![List of files!](/gigabyte/bios_files.png)

> We’ll be using all the files but you can skip the PDF and `.exe`.

---

## ☁️ Step 2: Prepare the bootable USB with EFI Shell

1. Download EFI Shell (used version):  
   👉 [Shell.efi – Tianocore UDK2018](https://github.com/tianocore/edk2/blob/UDK2018/ShellBinPkg/UefiShell/X64/Shell.efi)

2. Rename it to: `BOOTX64.EFI`

3. Format your USB as **FAT32**

4. Create this folder structure in your USB drive -> EFI/BOOT:

5. Copy everything from the Gigabyte BIOS `.zip` except the instruction PDF to EFI/BOOT.

6. Copy the BOOTX64.EFI you renamed in step 2 (EFI Shell) to EFI/BOOT.

7. Your FAT32 USB pendrive structure should be something like this (can vary depending on your g5 model, in my case is g5 mf):

![Pendrive structure!](/gigabyte/pendrive_structure.PNG)

📝

---

## 🚀 Step 3: Boot into EFI Shell

- Insert the USB into the bricked laptop
- Power it on and press `F2` repeatedly
- From the boot menu, select the USB (UEFI mode)

![Boot menu!](/gigabyte/boot_menu.jpg)

- You should see the EFI Shell prompt like: `Shell>`

---

## 🔧 Step 4: Flash the BIOS

From the EFI Shell, execute this commands:

```shell
fs0:
dir
cd EFI
cd BOOT
FlashMe.nsh
```

The script will:

- Detect the .10 BIOS file
- Flash it using Intel FPT

Then call NP50RNx-Y10.efi for any additional OEM routines

⚠️ _Do not interrupt. It will execute some processes, then restart one time, then flash the bios. When it says completed, it will power off automatically._

Screenshots of my process:

![Flash process!](/gigabyte/process_1.jpg)
![Flash process!](/gigabyte/process_2.jpg)
![Flash process!](/gigabyte/process_3.jpg)
![Flash process!](/gigabyte/process_4.jpg)
![Flash process!](/gigabyte/process_5.jpg)
![Flash process!](/gigabyte/process_6.jpg)

⚠️ _AGAIN: Do not interrupt. When it says completed, it will power off automatically._

## Step 5: Reboot and celebrate

- Remove the USB stick
- Turn on the laptop

![Bios updated version!](/gigabyte/bios_updated_version.jpg)

Now your BIOS is updated and repaired, you should be able to boot a windows installer or any other image using Ventoy or similar. I personally recommend not to install Windows 11 again, until the problem with updates is solved. Install windows 10 or a linux distribution.

As an example, i booted in a windows 10 installer successfully:
![Bios updated version!](/gigabyte/windows_10_installer.jpg)

## 🧠 Final Notes

This is a soft-brick recovery — no hardware programmer needed

- No need to extract BIOS.fd or ME.fd; the .10 image contains all regions
- The FlashMe.nsh script automates the process safely
- If Secure Boot is enabled and EFI Shell doesn’t boot: disable Secure Boot (if possible)
