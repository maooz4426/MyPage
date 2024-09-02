"use client"
import {motion, AnimatePresence} from "framer-motion";
import React from "react";
import {Menubar} from "@/components/Menubar";
import {ContentTemplate} from "@/components/ContentTemplate";
import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import Image from "next/image";
import {DialogTemplate} from "@/components/ContentTemplate";
import IconLink from "@/components/IconLink";


export default function WorkPage (){
    // const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    enum DialogType{
        None,
        Plateau,
        Report
    }
    const [dialogType, setDialogType] = React.useState(DialogType.None);
    const dialogRef = React.useRef<HTMLDivElement | null>(null);

    const handleCloseDialog =(e:MouseEvent) =>{
        if((dialogRef.current as any).contains(e.target)) return;
        setDialogType(DialogType.None);
    }

    React.useEffect(()=>{
        document.addEventListener("click", handleCloseDialog);
        return ()=>{
            document.removeEventListener("click", handleCloseDialog);
        }
    })


  return(
      <div>

          <Menubar/>
          {/*AnimatePresenceを使うとふわっとした消えるアニメーションとか使える*/}
          <AnimatePresence>
          {dialogType === DialogType.Plateau && (
              <div className="fixed inset-0 bg-black bg-opacity-50">
                  <div ref={dialogRef}>
                      <DialogTemplate
                          src={`${BASE_PATH}/images/plateau-sdk-game.png`}
                      >
                          <div className="mx-2">
                              <h1 className="flex items-center justify-center underline">PlateauSDKのゲームサンプル</h1>
                              <p>株式会社Synastasias様のインターンで, 国交相主導のプロジェクトであるPlateauのSDK宣伝ゲーム開発に携わりました。</p>
                              <p>主にUnityでのキャラクターの攻撃アクションの実装を担当しました。</p>
                          </div>
                          <div className="my-4 ">
                              <IconLink src={`${BASE_PATH}/images/Github.svg`}
                                        alt="Github logo"
                                        href="https://github.com/Synesthesias/PLATEAU-SDK-for-Unity-GameSample"
                              />
                          </div>
                      </DialogTemplate>
                  </div>
              </div>
          )}
          {dialogType === DialogType.Report && (
              <div className="fixed inset-0 bg-black bg-opacity-50">
                  <div ref={dialogRef}>
                      <DialogTemplate
                          src={`${BASE_PATH}/images/reportkun.png`}
                      >
                          <div className="mx-2">
                              <h1 className="flex items-center justify-center underline">レポートお助けくん</h1>
                              <p>株式会社VIVRE CARD様のインターンで,
                                  学生のレポート作成支援サービスであるレポートお助けくんのサービスの開発に携わっています。</p>
                              <p>Next.jsでのUX改善業務を主に行っています。</p>
                          </div>
                      </DialogTemplate>
                  </div>
              </div>
          )}
          </AnimatePresence>

          <div className="flex flex-col items-center">
              <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.3, delay: 0.5}}
                  className=" text-4xl my-20 underline"
              >Work
              </motion.div>

              <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.3, delay: 0.5}}
                  className="text-2xl  underline"
              >Internship
              </motion.div>
          </div>


          <div className="grid grid-cols-2">
              <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 1, delay: 2}}
                  onClick={() => setDialogType(DialogType.Plateau)}
                  className=" mx-4 my-10"
              >
                  <div className="w-full flex flex-col mx-auto items-center">
                      <button>
                      <Image
                      src={`${BASE_PATH}/images/plateau-sdk-game.png`}
                      alt="plateau-sdk"
                      width={500}
                      height={400}
                  />
                  <h1 className="text-2xl my-2 underline">PLATEAU SDKのゲームサンプル</h1>
                  </button>
              </div>
          </motion.div>

          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}
              onClick={() => setDialogType(DialogType.Report)}
              className="my-10 flex flex-col items-center justify-center">
              <button>
                  <Image
                      src={`${BASE_PATH}/images/reportkun.png`}
                      alt="plateau-sdk"
                      width={500}
                      height={400}
                  />
              </button>
              <h1 className="text-2xl my-2 underline">レポートお助けくん</h1>
          </motion.div>
          </div>

          <div className="dialog">

          </div>

      </div>

)
}