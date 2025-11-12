'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SecurityGauge from './SecurityGauge'

interface SecurityScanModalProps {
  siteName: string
  buttonClassName?: string
}

export default function SecurityScanModal({ siteName, buttonClassName }: SecurityScanModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(0)
  const [targetValue, setTargetValue] = useState(0)

  // 打开时生成独立随机分数
  const handleOpen = () => {
    const randomScore = +(Math.random() * (99.99 - 96.9) + 96.9).toFixed(2)
    setTargetValue(randomScore)
    setValue(0)
    setIsOpen(true)
  }

  // 动态动画递增
  useEffect(() => {
    if (!isOpen) return
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 1.5
      if (current >= targetValue) {
        current = targetValue
        clearInterval(interval)
      }
      setValue(parseFloat(current.toFixed(2)))
    }, 80)
    return () => clearInterval(interval)
  }, [isOpen, targetValue])

  return (
    <>
      {/* Review 按钮 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        // ✅ 若父層有傳入 buttonClassName，就使用它；否則 fallback 為預設樣式
        className={
          buttonClassName ||
          "flex-1 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
        }
      >
        Review
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="relative w-[90vw] max-w-xl bg-[#edf2ff] border border-cyan-500/40 rounded-2xl shadow-2xl p-8 text-center"
            >
              {/* 关闭按钮 */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-cyan-300 hover:text-white transition-all"
              >
                ✖
              </button>

              {/* 标题 */}
              <h2 className="text-2xl font-bold text-black font-orbitron mb-2">
                Security Scan
              </h2>
              <p className="text-gray-500 mb-4 text-sm">Target: {siteName}</p>

              {/* 仪表盘 */}
              <SecurityGauge value={value} />

              {/* 扫描提示 */}
              <div className="text-gray-500 text-sm mt-4">
                System integrity check in progress…<br />
                Please do not close this window.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
